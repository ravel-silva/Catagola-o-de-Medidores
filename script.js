const medidorTria = document.getElementById("medidorTria");
const medidorVeri = document.getElementById("medidorVeri");
const listaTria = document.getElementById("listaTria");
const listaVeri = document.getElementById("listaVeri");

const numerosTria = [];
const numerosVeri = [];

// Função para armazenar os números de medidores da TRIA
function armazenarTria() {
  const medidoresTria = medidorTria.value;
  if (medidoresTria !== "") {
    numerosTria.push(medidoresTria);
    medidorTria.value = "";
  } else {
    alert("Informe o Número do Medidor");
  }
}

// Função para armazenar os números de medidores da VERI
function armazenarVeri() {
  const medidoresVeri = medidorVeri.value;
  if (medidoresVeri !== "") {
    numerosVeri.push(medidoresVeri);
    medidorVeri.value = "";
  } else {
    alert("Informe o Número do Medidor");
  }
}

// Função para exibir os medidores na lista
function exibirLista(tipo) {
  if (tipo === "tria") {
    listaTria.innerHTML = "";
    numerosTria.forEach(function (medidor) {
      const li = document.createElement("li");
      li.textContent = medidor;
      listaTria.appendChild(li);
    });
  } else {
    listaVeri.innerHTML = "";
    numerosVeri.forEach(function (medidor) {
      const li = document.createElement("li");
      li.textContent = medidor;
      listaVeri.appendChild(li);
    });
  }
}

// Função para adicionar os medidores TRIA
function addTria() {
  armazenarTria();
  exibirLista("tria");
  console.log(numerosTria);
}

// Função para adicionar os medidores VERI
function addVeri() {
  armazenarVeri();
  exibirLista("veri");
  console.log(numerosVeri);
}

// Função para enviar dados para o servidor
async function enviarDados() {
  const dados = {  dados: numerosTria.map((valor, index) => [valor, numerosVeri[index] || ''])};  // Exemplo: dados a serem enviados
  try {
    const response = await fetch('http://localhost:3000/adicionar-dados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados),  // Envia os dados como JSON
    });
    
    if (response.ok) {
      const jsonResponse = await response.json();  // Processa a resposta como JSON
      console.log(jsonResponse.message);  // Exibe a mensagem de sucesso
    } else {
      const jsonResponse = await response.json();
      console.error(jsonResponse.error);  // Exibe o erro
    }
  } catch (error) {
    console.error('Erro ao enviar dados:', error);
  }
}

