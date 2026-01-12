# LinkedIn Job Cleaner

Uma extensão simples de navegador que remove visualmente e limpa do código as vagas "Promovido", "Promoted" e "Patrocinado" das buscas do LinkedIn, deixando apenas as vagas que realmente interessam.

## Como baixar

1. Clique no botão verde **Code** aqui no GitHub.
2. Selecione **Download ZIP**.
3. Extraia (descompacte) a pasta em um local seguro do seu computador (ex: `Meus Documentos`).

---

## Como instalar

Como esta extensão ainda não está na loja oficial, você precisa instalá-la em "Modo de Desenvolvedor".

### Google Chrome, Edge, Brave ou Opera

1. Abra o navegador e digite na barra de endereços: `chrome://extensions` (ou `edge://extensions` no Edge).
2. No canto superior direito, ative a chave **Modo do desenvolvedor** (Developer mode).
3. Clique no botão **Carregar sem compactação** (Load unpacked).
4. Selecione a pasta que você extraiu no passo anterior.
5. Pronto! A extensão já está rodando.

### Mozilla Firefox

*Nota: No Firefox padrão, instalações manuais são temporárias e somem ao fechar o navegador.*

1. Digite `about:debugging` na barra de endereços.
2. No menu lateral, clique em **Este Firefox** (This Firefox).
3. Clique em **Carregar extensão temporária...** (Load Temporary Add-on).
4. Entre na pasta que você baixou e selecione o arquivo `manifest.json`.

---

## ⚙️ Como funciona

O script monitora a página de vagas. Assim que detecta uma vaga com os termos "Promovido", "Promoted" ou "Patrocinado", ele remove o elemento HTML completamente da lista, reajustando o layout automaticamente.

## 🤝 Contribuição

Sinta-se à vontade para abrir Issues ou Pull Requests para melhorar o filtro!
