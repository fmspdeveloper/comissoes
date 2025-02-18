

function calcular() {
  var comissao = (parseFloat($("#valorPorcentagem").val()) / 100) * parseFloat($("#valor_vendedor").val());
  $("#comissao").val(comissao);
  $("#sera_pago").val($("#valor_vendedor").val() - $("#comissao").val())
}

