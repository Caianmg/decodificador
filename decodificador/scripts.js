const inputTexto = document.getElementById('textoDeEntrada');
const btnCriptografar = document.getElementById('criptografar');
const btnDescriptografar = document.getElementById('descriptografar');
const resultadoTexto = document.getElementById('texto-resultante');
const btnCopiar = document.getElementById('copiar');
const inputSection = document.getElementById('input-section');
const resultadoSection = document.getElementById('resultado-section');
const imagemBusca = document.getElementById('imagem-busca');
const primeiroParagrafo = document.getElementById('primeiro-paragrafo');
const segundoParagrafo = document.getElementById('segundo-paragrafo');
const mensagemCopia = document.getElementById('mensagem-copia');
const mensagemErro = document.getElementById('mensagem-erro');

function criptografarTexto(texto) {
    const criptografia = {'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat'};
    return texto.replace(/[aeiou]/g, letra => criptografia[letra]);
}

function descriptografarTexto(texto) {
    const descriptografia = {'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u'};
    return texto.replace(/ai|enter|imes|ober|ufat/g, grupo => descriptografia[grupo]);
}

function mostrarResultado(texto) {
    resultadoTexto.innerText = texto;
    resultadoTexto.classList.remove('oculto');
    btnCopiar.classList.remove('oculto');
    imagemBusca.classList.add('oculto');
    primeiroParagrafo.classList.add('oculto');
    segundoParagrafo.classList.add('oculto');
    mensagemErro.classList.add('oculto');
}

function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

function mostrarErro() {
    mensagemErro.innerText = 'O texto deve conter apenas letras minúsculas e sem acentos.';
    mensagemErro.classList.remove('oculto');
}

btnCriptografar.addEventListener('click', () => {
    const texto = inputTexto.value;
    if (validarTexto(texto)) {
    const textoCriptografado = criptografarTexto(texto);
    mostrarResultado(textoCriptografado);
    } else {
        mostrarErro();
    }
});

btnDescriptografar.addEventListener('click', () => {
    const texto = inputTexto.value;
    if (validarTexto(texto)) {
    const textoDescriptografado = descriptografarTexto(texto);
    mostrarResultado(textoDescriptografado);
    } else {
        mostrarErro();
    }
});

btnCopiar.addEventListener('click', () => {
    const copiarTexto = resultadoTexto.innerText;
    navigator.clipboard.writeText(copiarTexto)
        .then(() => {
            mensagemCopia.classList.remove('oculto');
            setTimeout(() => {
                mensagemCopia.classList.add('oculto');
            }, 2000);
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
});