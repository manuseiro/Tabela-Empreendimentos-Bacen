# Consulta de Registros com DataTables.js e Destaque por Data de Fim

Este é um exemplo de como criar uma página HTML que utiliza DataTables.js para exibir registros em uma tabela e destaca as linhas cuja data de fim seja menor que a data atual.

## Pré-requisitos

Para executar esse exemplo, você precisará de:

1. Um navegador web moderno que suporte JavaScript.
2. Uma conexão com a Internet para carregar a biblioteca DataTables.js e o Bootstrap 5 (CDN).

## Instruções

1. Crie um arquivo HTML com o seguinte conteúdo:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Consulta de Registros</title>
  <!-- Adicione os links para os estilos do Bootstrap e DataTables.js -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/dataTables.bootstrap5.min.css">
  <style>
    /* Estilo para linhas com data de fim menor que a data atual */
    .destaque-vermelho {
      background-color: #ffcccc; /* Cor de fundo vermelho claro */
    }
  </style>
</head>
<body>
  <div class="container mt-4">
    <h1 class="mb-4">Consulta de Registros</h1>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="pesquisa" class="form-label">Pesquisar:</label>
        <input type="text" id="pesquisa" class="form-control" oninput="buscarRegistroPorCampo()">
      </div>
    </div>
    <div class="table-responsive mt-4">
      <table class="table table-striped table-bordered" id="registrosTable">
        <thead>
          <tr>
            <th>#Código</th>
            <th>Data de Início</th>
            <th>Data de Fim</th>
            <th>Finalidade</th>
            <th>Atividade</th>
            <th>Modalidade</th>
            <th>Produto</th>
            <!-- Adicione mais campos do registro conforme necessário -->
          </tr>
        </thead>
        <tbody>
          <!-- Os registros serão preenchidos dinamicamente com JavaScript -->
        </tbody>
      </table>
    </div>
  </div>

  <!-- Adicione os scripts do jQuery e DataTables.js -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
  <script src="https://cdn.datatables.net/1.11.5/js/dataTables.bootstrap5.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```
Crie um arquivo JavaScript chamado script.js na mesma pasta do arquivo HTML com o seguinte conteúdo:

// Insira aqui o conteúdo do arquivo script.js fornecido anteriormente


Crie um arquivo JSON chamado Empreendimento.json na mesma pasta do arquivo HTML com os registros a serem exibidos na tabela, seguindo o formato do exemplo fornecido anteriormente.

Abra o arquivo HTML em um navegador e os registros serão exibidos em uma tabela usando DataTables.js. As linhas com data de fim menor que a data atual serão destacadas em vermelho.

Customizações

Você pode personalizar o estilo, adicionar mais campos aos registros e implementar outros recursos conforme necessário para atender às suas necessidades específicas.
Contribuição

Sinta-se à vontade para contribuir com melhorias, correções ou novas funcionalidades para este exemplo. Basta enviar um pull request para este repositório.
Licença

Este exemplo é licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.