const calculo = document.getElementById('calculo');

	function gerar_juro () {
		const nome = document.getElementById('nome').value;

		const capital = document.getElementById('capital').value;

		const taxa_juros = document.getElementById('taxa_juros').value;

		const num_parcelas = document.getElementById('num_parcelas').value;

		const final = document.getElementById('final');

		const new_taxa_juros = taxa_juros / 100;

		const juro = (capital * (((( 1 + new_taxa_juros ) ** num_parcelas ) -1 ) / new_taxa_juros ));

		const new_juro = (juro).toFixed(2);

		final.textContent ='Olá '+nome+ '! Aplicando R$ '+capital+' à uma taxa de juros de '+taxa_juros+ '% por mês, por '+num_parcelas+' meses, você irá ter um lucro de R$ '+new_juro;

		}

		calculo.addEventListener('click', gerar_juro);