const members = document.querySelectorAll('.member');
const body = document.body;

members.forEach(member => {
  member.addEventListener('mouseenter', () => {
    const theme = member.getAttribute('data-theme');
    body.className = `theme-${theme}`; // Substitui as classes do body pelo tema atual
  });

  member.addEventListener('mouseleave', () => {
    body.className = ''; // Remove a classe, voltando ao preto e branco padrão
  });
});