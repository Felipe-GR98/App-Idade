function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")

    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!!")
    }
    else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsex[0].checked) {
            genero = "Homem"

            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute("src", "crianH.png")
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            }
            else if (idade < 21) {
                //Adolecente
                img.setAttribute("src", "adoH.png")
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            }
            else if (idade < 50) {

                //adulto
                img.setAttribute("src", "adutH.png")
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            }
            else {
                //idoso
                img.setAttribute("src", "idoH.png")
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            }
        }
        else if (fsex[1].checked) {
            genero = "Mulher"

            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute("src", "crianM.png")
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            }
            else if (idade < 21) {
                //Adolecente
                img.setAttribute("src", "adoM.png")
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute("src", "adutM.png")
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            }
            else {
                //idoso
                img.setAttribute("src", "idoM.png")
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            }
        }

        res.appendChild(img)

    }
}
