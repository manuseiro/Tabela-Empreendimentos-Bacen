let dataTable;

document.addEventListener('DOMContentLoaded', () => {
  fetch('Empreendimento.json')
    .then(response => response.text())
    .then(text => JSON.parse(decodeURIComponent(text)))
    .then(data => {
      const tableData = data.map(registro => [
        registro["#CODIGO"],
        registro["DATA_FIM"],
        registro["FINALIDADE"],
        registro["ATIVIDADE"],
        registro["MODALIDADE"],
        registro["PRODUTO"],
        registro["ZONEAMENTO"],
        registro["CONSORCIO"],
        // Adicione mais campos do registro conforme necessário
      ]);

      dataTable = $('#registrosTable').DataTable({
        data: tableData,
        columns: [
          { title: "Empreendimento" },
          { title: "Data de Fim" },
          { title: "Finalidade" },
          { title: "Atividade" },
          { title: "Modalidade" },
          { title: "Produto" },
          { title: "Zoneamento" },
          { title: "Consorcio" },
          // Adicione mais campos do registro conforme necessário
        ],
        createdRow: function (row, data, dataIndex) {
          const dataFim = new Date(data[2]);
          const dataAtual = new Date();

          if (dataFim < dataAtual) {
            $(row).addClass('destaque-vermelho');
          }
        },
      });
    });
});

function buscarRegistroPorCampo() {
  const pesquisaTermo = document.getElementById('pesquisa').value;
  dataTable.search(pesquisaTermo).draw();
}
