<h1><b>Shakers - Teste</b></h1>
<h2>Plataforma</h2>
<p>
   Shopify
</p>
<h2>Tecnologia Utilizada:</h2>
<p>
    HTML;<br /> CSS/SASS (métodologia BEM);<br /> JavaScript (puro); <br /> Liquid (Shopify);<br /> Gulp;
</p>
<h2>Framework Utilizado:</h2>
<p>
    Nenhum
</p>
<h2>Aplicativo Utilizado:</h2>
<p>
    ACT - Metafilds Custom Fields. Gratuito.
</p>
<table>
  <tr>
    <th>Funcionalidade</th>
    <th>Detalhe</th>
  </tr>
  <tr>
    <td>Criar produto customizável</td>
    <td>
        Imagem que contém pontos (coordernadas) sobre a iamgem, que ao clicar nos pontos ao lado mostrará um produto A, <br />
        clicando em outro ponto, mostrará um produto B.
    </td>
  </tr>
  <tr>
    <td>Botão para adicionar ao carrinho</td>
    <td>
        Os produtos que são mostrados conforme os cliques, foram criados botão para adicionar ao carrinho.
    </td>
  </tr>
</table>
<h3>Observação</h3>
<p>O lojista pode criar o produto e imagem que quiser acessando o aplicativo ACT - Metafilds Custom Fields. Gratuito.</p>
<p>No arquivo theme.liquid (arquivo principal) foi adicionado condicional para chamar o snippet lookbook. Segue abaixo: <br />
    <code>
        {% if template contains 'index' %}
            {% include 'lookbook' %}
        {% endif %}
    </code>
</p>
<h2>Como adicionar</h2>
<div style="display:flex;flex-direction:column">
    <a href="https://github.com/Rodolfo-87/shakers-shopify-teste/blob/main/img/img-1.jpg"> 
        <p>Imagem 01 - Admin Shopify, como acessar.</p>
    </a>
    <a href="https://github.com/Rodolfo-87/shakers-shopify-teste/blob/main/img/img-2.jpg">
        <p> Imagem 02 - Como adicionar imagem e produtos pelo App </p>
    </a>
</div>
<h2>Vídeo da Implementação (feat)</h2>
<a href="https://github.com/Rodolfo-87/shakers-shopify-teste/assets/53090730/73b1898d-a3bd-4042-974c-d6916859e8cf"> 
    <video width="600" height="340" autoplay>
        <source src="https://github.com/Rodolfo-87/shakers-shopify-teste/assets/53090730/73b1898d-a3bd-4042-974c-d6916859e8cf" type="video/mp4">
    </video>
</a>

