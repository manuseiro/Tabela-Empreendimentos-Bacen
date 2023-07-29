document.addEventListener('DOMContentLoaded', () => {
  loadTableData();
});

function loadTableData() {
  Promise.all([
    fetch('Empreendimento.json').then(response => response.json()),
    fetch('Modalidade.json').then(response => response.json())
  ]).then(([empreendimentoData, modalidadeData]) => {
    const tableData = empreendimentoData.map(registro => {
      return [
        registro["#CODIGO"],
        registro["DATA_INICIO"],
        registro["DATA_FIM"],
        registro["FINALIDADE"],
        registro["ATIVIDADE"],
        registro["MODALIDADE"],
        registro["PRODUTO"],
        registro["ZONEAMENTO"],
        registro["CONSORCIO"],
        verificarNecessidadeCoordenadas(registro, modalidadeData), // Preenchendo a coluna Coordenadas?
        // Adicione mais campos do registro conforme necessário
      ];
    });

    const dataTable = $('#registrosTable').DataTable({
      data: tableData,
      columns: [
        { title: "#Código" },
        { title: "Data de Início" },
        { title: "Data de Fim" },
        { title: "Finalidade" },
        { title: "Atividade" },
        { title: "Modalidade" },
        { title: "Produto" },
        { title: "Zoneamento" },
        { title: "Consórcio" },
        { title: "Coordenadas?" }, // Adicionamos a coluna Coordenadas?
        // Adicione mais campos do registro conforme necessário
      ],
    });
  });
}

function verificarNecessidadeCoordenadas(registro, modalidadeData) {
  const modalidade = modalidadeData.find(modalidade => modalidade["CODIGO_MODALIDADE"] === registro["CD_TIPO_CULTURA"]);

  if (!modalidade) {
    // Se a modalidade não for encontrada no Modalidade.json, não é necessário o cadastro de coordenadas
    return "NÃO";
  }

  const finalidade = registro["FINALIDADE"];
  const codigoModalidade = modalidade["CODIGO_MODALIDADE"];

  // Regras para verificar a necessidade de coordenadas com base no arquivo Modalidade.json
  const modalidadesExcetuadas = [2, 5, 15, 25, 40, 41, 42, 70, 85];
  const modalidade14Exigencias = ['13144020109408', '23144020109408', '13147705000408', '23147705000408'];
  const modalidade50Exigencias = ['23507635338002', '22505865334002'];

  if (finalidade === "Custeio" || (finalidade === "Investimento" && !modalidadesExcetuadas.includes(codigoModalidade))) {
    if (codigoModalidade === 14 && modalidade14Exigencias.includes(registro["#CODIGO"].toString())) {
      return "SIM";
    } else if (codigoModalidade === 50 && modalidade50Exigencias.includes(registro["#CODIGO"].toString())) {
      return "SIM";
    } else if (!modalidadesExcetuadas.includes(codigoModalidade)) {
      return "SIM";
    }
  }

  return "NÃO";
}

function buscarRegistroPorCampo() {
  const pesquisaTermo = document.getElementById('pesquisa').value;
  dataTable.search(pesquisaTermo).draw();
}
