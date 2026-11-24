# Landing page — Advocacia

Versão estática recriada a partir do protótipo WordPress V3, em HTML, CSS e JavaScript. Não é um export integral do WordPress.

Abra `index.html` no navegador ou hospede via GitHub Pages. Para publicar pelo Pages, configure Settings → Pages → Deploy from a branch → main / (root).

## Personalização
- Substitua textos, marca, áreas de atuação, OAB e dados de contato em `index.html`.
- Ajuste o número oficial na constante `whatsapp` de `script.js`.
- Ajuste cores e espaçamentos em `style.css`.
- As três imagens ilustrativas são carregadas do Unsplash por URLs externas. Substitua pelas fotos autorizadas do escritório, armazenadas localmente, antes da publicação final.
- Valide publicidade profissional, acessibilidade, responsividade, SEO e desempenho antes da entrega. Remova `noindex` apenas quando for lançar a versão aprovada.

O projeto não contém dados oficiais do cliente. GitHub Pages normalmente torna a página pública, mesmo que o protótipo original WordPress seja privado.

## Contato demonstrativo
Com o número vazio em `script.js`, o botão abre uma janela com carregamento de 1,6 segundo e uma conversa ilustrativa identificada como simulação. Não envia dados ou mensagens. Após inserir o número oficial com DDI e DDD, o botão passa a abrir o link `wa.me` com mensagem sugerida, sem necessidade de API ou backend.

## SEO e publicação definitiva
- Metadados de título, descrição e compartilhamento já estão no HTML.
- Substitua os dados ilustrativos pelo nome, localização e especialidades reais; mantenha alt text fiel às fotos.
- Enquanto for protótipo, mantenha `noindex,nofollow` e não envie ao Search Console.
- Após aprovação, configure o domínio e HTTPS, remova noindex, defina a URL canônica e og:url, publique sitemap.xml e robots.txt adequados ao endereço definitivo, valide a indexação no Search Console e teste o desempenho no PageSpeed Insights.
- SEO básico não garante posicionamento no Google.
