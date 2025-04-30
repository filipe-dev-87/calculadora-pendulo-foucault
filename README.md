# 🌎 Calculadora do Pêndulo de Foucault

## 📋 Descrição
Este projeto é uma aplicação web simples e educativa que calcula o tempo necessário para o plano de oscilação de um pêndulo de Foucault completar uma rotação completa, com base na latitude informada pelo usuário. Ele demonstra a influência da rotação da Terra sobre esse fenômeno físico.

## 🚀 Funcionalidade
- Entrada numérica da latitude em graus decimais.
- Validação de entrada entre -90° e 90°.
- Cálculo físico usando a fórmula: tempo = 24 / seno(latitude_em_radianos).
- Feedback visual com cores para erro ou sucesso.
- Estilo moderno e responsivo.

## 🧠 Como funciona
### HTML (index.html)
Estrutura principal da aplicação:
- Campo de entrada para a latitude.
- Botão que aciona o cálculo.
- Área para exibir o resultado.

### CSS (css/style.css)
- Estilização com rem, clamp(), sombras e cantos arredondados.
- Design centralizado usando Flexbox.
- Fontes e cores suaves para melhor experiência visual.

### JavaScript (js/script.js)
- Valida a entrada do usuário.
- Converte valores com vírgula para ponto.
- Calcula a rotação com base no seno da latitude.
- Exibe mensagens de erro ou resultado formatado.

## 📁 Estrutura de Arquivos

calculadora-pendulo/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    └── favicon.png

## 📱 Responsividade
Utiliza a função clamp() para tamanho de fonte adaptável:

font-size: clamp(1rem, 2.5vw, 1.2rem);

## 🛠️ Como executar localmente
1. Clone este repositório.
2. Abra o arquivo index.html no seu navegador.

git clone https://github.com/filipe-dev-87/calculadora-pendulo-foucault.git
cd calculadora-pendulo
start index.html

## 📚 Licença
Este projeto está licenciado sob a MIT License (LICENSE), sinta-se livre para utilizá-lo e adaptá-lo.

Feito com 💙 para fins educativos e científicos.