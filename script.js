let saldo = 0.0;
const taxaJuros = 0.05; // Taxa de juros de 5%
const interval = 1000; // Intervalo de 1 segundo

function depositar() {
    const valor = parseFloat(document.getElementById('valor').value);
    if (isNaN(valor) || valor <= 0) {
        alert('Digite um valor válido para depósito.');
        return;
    }
    saldo += valor;
    atualizarSaldo();
    document.getElementById('valor').value = '0.00';
}

function sacar() {
    const valor = parseFloat(document.getElementById('valor').value);
    if (isNaN(valor) || valor <= 0) {
        alert('Digite um valor válido para saque.');
        return;
    }
    if (valor > saldo) {
        alert('Saldo insuficiente para saque.');
        return;
    }
    saldo -= valor;
    atualizarSaldo();
    document.getElementById('valor').value = '0.00';
}

function aplicarJuros() {
    setInterval(() => {
        saldo *= (1 + taxaJuros);
        atualizarSaldo();
    }, interval);
}

function atualizarSaldo() {
    document.getElementById('saldo').textContent = saldo.toFixed(2);
}

// Chamada para exibir o saldo inicial
atualizarSaldo();
// Iniciar a aplicação dos juros
aplicarJuros();
