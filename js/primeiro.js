document.getElementById('entrar').addEventListener('click' , validation)
document.getElementById('cad-form').addEventListener('click' , show_cad)
document.getElementById('login').addEventListener('click' , show_login)
document.getElementById('cadastro').addEventListener('click' , cadastro)

let user_cad = ''
let password_cad = ''
let email_cad = ''

function validation (){
    let user = document.getElementById('user').value
    let senha = document.getElementById('password').value

    if(!user.trim() && !senha.trim()){
        show_msg_erro('prencha os campos')
    }
    else if (user === user_cad && senha === password_cad ) {
        show_msg_sucess('login realizado')
        document.getElementById('user').value = ''
        document.getElementById('password').value = ''


    }
    else{
        show_msg_erro('login nao realizado')
    }
}
function cadastro(){
    let cad_senha = document.getElementById('password-cad').value
    let cad_senha_conf = document.getElementById('password-cad-conf').value
    let cad_nome = document.getElementById('nome-cad').value
    let cad_email = document.getElementById('email').value

    if(!cad_nome.trim()){
        show_msg_erro('preencha o campo nome')
    }else{
        user_cad = cad_nome
    }

    if(!cad_email.trim()){
        show_msg_erro('prencha o email')
    }else{
        email_cad = cad_email
    }

    if(!cad_senha.trim()){
        show_msg_erro('prencha o campo de senha')
    }else if(!cad_senha_conf.trim()){
        show_msg_erro('confirme a senha')
    }else if(cad_senha === cad_senha_conf ){
        password_cad = cad_senha
        show_login()
        document.getElementById('password-cad').value = ''
        document.getElementById('password-cad-conf').value = ''
        document.getElementById('nome-cad').value = ''
        
    }else{
        show_msg_erro('verifique a senha')
    }

}
function show_cad(){
    document.getElementById('log').style.display = 'none'
    document.getElementById('cad').style.display = 'flex'
}
function show_login(){
    document.getElementById('cad').style.display = 'none'
    document.getElementById('log').style.display = 'flex'
}

function show_msg_sucess(show){

    let msg = document.createElement('div')
    let text = document.createElement('h3')
    
    text.innerText = show
    msg.appendChild(text)
    msg.classList.add('msg')

    document.getElementById('conteudo').prepend(msg)

    setTimeout(function(){
        msg.style.opacity = 0
        msg.style.visibility = 'hidden'
    },1000)

    setTimeout(function(){
        msg.style.display = 'none'
    },1550)

}
function show_msg_erro(show){

    let msg_erro = document.createElement('div')
    let msg_text = document.createElement('h3')

    msg_text.innerText = show
    msg_erro.appendChild(msg_text)
    msg_erro.classList.add('erro')
    

    document.getElementById('conteudo').prepend(msg_erro)

    setTimeout(function(){
        msg_erro.style.opacity = 0
        msg_erro.style.visibility = 'hidden'
    } ,1000);

    setTimeout(function(){
        msg_erro.style.display = 'none'
    },1550)

}

