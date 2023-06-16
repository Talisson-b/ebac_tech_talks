AOS.init();

const dataDoEvento = new Date('Dec 12, 2023 19:00:00');
const timeStampDoEvento = dataDoEvento.getTime()

const contaAsHoras = setInterval(function() {
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual
    const dias = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24))
    const horas = Math.floor((distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 *60))
    const minutos = Math.floor((distanciaAteOEvento % (1000 * 60 *60)) / (1000 * 60))
    const segundos = Math.floor((distanciaAteOEvento % (1000 * 60) ) / 1000)
    console.log(dias)
    console.log(horas)
    console.log(minutos)
    console.log(segundos)

    document.getElementById('contador').innerHTML =  `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
},1000)