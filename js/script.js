function mostrarResultado(mensagem) {
    const resultado = document.getElementById('resultado');
    resultado.style.color = 'green';
    resultado.innerText = mensagem;
}

function mensagemErro(mensagem) {
	const resultado = document.getElementById('resultado');
	resultado.style.color = 'red';
	resultado.innerText = mensagem;
}

function calcular() {

	const latitude = parseFloat(document.getElementById('latitude').value.replace(',', '.'));

	if(isNaN(latitude) || latitude < -90 || latitude > 90) {
		mensagemErro('Por favor, insira uma latitude válida entre -90° e 90°.');
		return;
	}

	const rad = latitude * (Math.PI / 180);
	const seno = Math.sin(rad);
	
	if(seno === 0) {
		mostrarResultado('No Equador, o plano de oscilação não gira (tempo = infinito).');
	} else {
		const tempo = 24 / seno;
		mostrarResultado(`Na latitude ${latitude}°, o plano de oscilação gira completamente em aproximadamente ${tempo.toFixed(2)} horas.`);
	}
}