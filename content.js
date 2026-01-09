const BLOCKED_TERMS = ['Promovido', 'Promoted', 'Patrocinado'];

function hidePromotedJobs() {
  const jobCards = document.querySelectorAll('.jobs-search-results__list-item, li.occludable-update');

  jobCards.forEach((card) => {
    if (card.dataset.processed) return;

    const textContent = card.innerText;

    const isPromoted = BLOCKED_TERMS.some(term => textContent.includes(term));

    if (isPromoted) {
      card.style.display = 'none';
      console.log('Vaga promovida ocultada.');
    }

    card.dataset.processed = 'true';
  });
}

hidePromotedJobs();

const observer = new MutationObserver((mutations) => {
  let shouldRun = false;
  
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      shouldRun = true;
    }
  });

  if (shouldRun) {
    hidePromotedJobs();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});