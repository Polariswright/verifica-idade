function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano ){
        alert('[ERRO] verifique os dados e tente novamente ')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value) //idade eh o ano atual - o valor digitado em fano
        var genero = '' //variavel vazia que vai receber dependendo qual vai estar checked
        let img = document.createElement('img') //criar um elemento do tipo 
        img.setAttribute('id','foto') //cria um atributo para o elemento img do tipo id com nome foto
        if(fsex[0].checked){//checa se o elemento 0 esta checked
            
            genero = 'Homem' //atribui homem se estiver checked
            if (idade>=0 && idade <10){
                //crianca
                img.setAttribute('src','crianca-homem.jpg')
            }else if(idade <21){
                //jovem
                img.setAttribute('src','jovem-homem.jpg')
            }else if(idade <50){
                //adulto
                img.setAttribute('src','adulto.jpg')
            }else{
                //idoso
                img.setAttribute('src','idoso.jpg')
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade <10){
                img.setAttribute('src','crianca-mulher.jpg')
            }else if( idade <21){
                img.setAttribute('src','jovem-mulher.jpg')

            }else if(idade<50){
                img.setAttribute('src','adulta.jpg')
            }else{
                img.setAttribute('src','idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos  ${genero} com ${idade} anos.`
        res.appendChild(img)//adiciona o elemento img apos o res
        img.style.textAlign = 'center'
    }

}