function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data =  new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 7 && hora < 12){
        //Bom dia foto manhã
        msg.innerHTML += ` Bom Dia!`
        img.src = 'image/Manhã.jpg'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        msg.innerHTML += ` Boa Tarde!`
        img.src = 'image/Tarde.jpg'
        document.body.style.backgroundColor = '#b9846f'
    } else if (hora >= 18 && hora < 23) {
        msg.innerHTML += ` Boa Noite!`
        img.src = 'image/noite.jpg'
        document.body.style.backgroundColor = '#515154'
    } else {
        msg.innerHTML += ` Boa Madrugada!`
        img.src = 'image/noite.jpg'
        document.body.style.backgroundColor = '#222222'
    }
}

