# Landing Page - Marcela Agnoletto

Uma landing page moderna e responsiva para a personal trainer Marcela Agnoletto, especializada em mentoria online de treinamento personalizado.

## 🚀 Características

- **Design Moderno**: Interface limpa e profissional com paleta de cores preto, laranja (#ff6b35) e branco
- **Totalmente Responsivo**: Adaptável a todos os dispositivos (desktop, tablet, mobile)
- **Animações Suaves**: Efeitos de entrada e transições elegantes
- **Otimizado para SEO**: Meta tags e estrutura semântica
- **Performance**: Carregamento rápido sem dependências externas
- **Acessibilidade**: Navegação por teclado e leitores de tela

## 📁 Estrutura do Projeto

```
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos CSS
├── js/
│   └── script.js       # Funcionalidades JavaScript
└── README.md           # Documentação
```

## 🎨 Seções da Landing Page

### 1. **Header/Navegação**
- Logo "Marcela Agnoletto" com subtítulo "Personal trainer"
- Menu de navegação responsivo
- Botão de contato destacado
- Menu hambúrguer para mobile

### 2. **Hero Section**
- Nome da personal trainer em destaque
- Subtítulo explicativo
- Botões de call-to-action
- Mensagem de urgência (vagas limitadas)

### 3. **Sobre a Mentoria**
- 4 cards com benefícios principais (lado a lado):
  - Avaliação Detalhada
  - Treino 100% Customizado
  - Acesso Ilimitado ao WhatsApp
  - Ajustes Contínuos

### 4. **Como Funciona**
- 4 etapas numeradas (lado a lado):
  - Avaliação Inicial
  - Criação do Plano
  - Feedback Contínuo
  - Acompanhamento de Progresso

### 5. **Planos**
- **Plano Mensal**: R$ 150/mês
- **Plano Trimestral**: R$ 390/3 meses (destaque)
- Botões diretos para WhatsApp

### 6. **Histórias de Sucesso**
- Depoimento de cliente
- Sistema de avaliação com estrelas

### 7. **CTA Final**
- Chamada para ação principal
- Recursos destacados
- Mensagem de urgência

### 8. **Footer**
- Informações de contato
- Links úteis
- Redes sociais

## 🔧 Funcionalidades JavaScript

- **Menu Mobile**: Toggle do menu hambúrguer
- **Scroll Suave**: Navegação entre seções
- **Animações de Entrada**: Elementos aparecem conforme o scroll
- **Header Dinâmico**: Muda conforme o scroll da página
- **Links WhatsApp**: Configuração automática dos links
- **Lazy Loading**: Carregamento otimizado de imagens

## 📱 Responsividade

A landing page é totalmente responsiva com breakpoints em:
- **Desktop**: 4 colunas lado a lado
- **Tablet (1024px)**: 2 colunas
- **Mobile (768px)**: 1 coluna

## 🎯 Paleta de Cores

- **Cor Principal**: Laranja (#ff6b35)
- **Cor de Destaque**: Laranja claro (#ff8a50)
- **Fundo**: Preto (#000000)
- **Texto**: Branco (#ffffff)
- **Cards**: Cinza escuro (#1a1a1a)

## 🚀 Otimizações

- **SEO**: Meta tags otimizadas
- **Performance**: CSS e JS otimizados
- **Acessibilidade**: Estrutura semântica
- **Cross-browser**: Compatível com todos os navegadores modernos

## 📞 Configuração do WhatsApp

Para configurar o número do WhatsApp, edite a variável `phoneNumber` no arquivo `js/script.js`:

```javascript
const phoneNumber = '5511999999999'; // Substitua pelo número real
```

## 🚀 Como Usar

1. Abra o arquivo `index.html` em qualquer navegador
2. Personalize as informações conforme necessário
3. Configure o número do WhatsApp
4. Faça upload para seu servidor web

## 🎨 Personalização

### Cores
As cores podem ser alteradas no arquivo `css/style.css` através das variáveis CSS:

```css
:root {
    --primary-color: #ff6b35;    /* Laranja principal */
    --secondary-color: #000000;  /* Preto */
    --accent-color: #ff8a50;     /* Laranja de destaque */
    --text-light: #ffffff;       /* Branco */
    --text-dark: #ffffff;        /* Branco */
    --bg-dark: #000000;          /* Preto */
    --bg-light: #1a1a1a;         /* Cinza escuro */
}
```

### Conteúdo
Todo o conteúdo pode ser editado diretamente no arquivo `index.html`.

## 📈 Analytics (Opcional)

Para adicionar Google Analytics, insira o código de tracking no `<head>` do HTML:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 Segurança

- Não há dependências externas além do Google Fonts
- Todos os links externos abrem em nova aba
- Formulários podem ser adicionados com validação

## 📞 Suporte

Para dúvidas ou suporte técnico, entre em contato através do WhatsApp configurado na página.

---

**Desenvolvido com ❤️ para Marcela Agnoletto**
