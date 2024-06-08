document.addEventListener('DOMContentLoaded', function() {
    alert('Bienvenue sur Previously !');

    const searchInput = document.getElementById('search');
    const series = document.querySelectorAll('.serie');

    searchInput.addEventListener('keyup', function() {
        const searchTerm = searchInput.value.toLowerCase();
        series.forEach(function(serie) {
            const title = serie.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                serie.style.display = 'block';
            } else {
                serie.style.display = 'none';
            }
        });
    });
});
