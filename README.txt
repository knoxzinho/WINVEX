WINVEX — Website institucional 0.3.5
====================================

Este pacote contém a atualização do site institucional para apresentar a versão WINVEX 0.3.5 Alpha.

Arquivos:
- index.html: página principal, recursos, novidades 0.3.5, versão, download e FAQ.
- styles.css: identidade visual responsiva e componentes da seção de novidades.
- script.js: menu mobile e comportamento do FAQ.
- assets/: logotipo, ícones e ilustrações SVG locais.

Novidades apresentadas no site:
- Monitoramento de CPU, RAM, GPU, VRAM, temperatura, atividade do disco e processos.
- Preparação para jogos com fechamento de aplicativos opcionais conhecidos.
- Revisões nas rotinas de manutenção e experiência de inicialização.
- Instruções atualizadas para baixar e instalar.

Limitações documentadas:
- A disponibilidade de VRAM e temperatura depende da GPU, do driver e dos sensores expostos pelo fabricante. O WINVEX tenta consultar NVIDIA SMI em placas NVIDIA.
- A atividade do disco depende dos contadores de desempenho do Windows.
- A preparação para jogos não encerra processos críticos e pode fechar aplicativos opcionais; salve o trabalho antes de executar.
- A versão 0.3.5 permanece Alpha e não garante aumento de FPS ou desempenho.

Download e publicação:
- Repositório: https://github.com/knoxzinho/WINVEX
- Releases: https://github.com/knoxzinho/WINVEX/releases
- Os botões de download direcionam à página oficial de Releases. Publique os instaladores/arquivos da versão nessa página para disponibilizá-los ao público.

Como visualizar: extraia o ZIP e abra index.html em um navegador moderno.
Como publicar: envie a pasta inteira para GitHub Pages, Netlify ou outra hospedagem estática.

O site mantém as fontes Google Fonts como aprimoramento visual e utiliza fallbacks locais do sistema. As ilustrações SVG são arquivos locais.


Atualização do site institucional — 0.3.6
- Rodapé atualizado com crédito de autoria para Knoxzinho e link para o Instagram.
- Adicionada linha do tempo com marcos da evolução do WINVEX desde a primeira build pública 0.1.7 até a 0.3.5.
- Link de navegação "Evolução" adicionado ao menu.
