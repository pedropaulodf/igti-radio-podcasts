window.addEventListener('load', start);

const inputTextMhz = document.querySelector('#txtMhz');
const rangeMhz = document.querySelector('#rangeMhz');
const divPodcasts = document.querySelector('.podcasts');

function start() {
    rangeMhz.addEventListener('input', searchPodcasts);
}

const searchPodcasts = () => {
    inputTextMhz.value = `${rangeMhz.value} Mhz`;
    for (let i = 0; i < realPodcasts.length; i++) {

        const findStation = realPodcasts.some(station => realPodcasts[i].id === rangeMhz.value);

        // console.log(findStation);
        if (findStation === true) {

            divPodcasts.innerHTML = '';

            const h2 = document.createElement('h2');
            h2.innerHTML = realPodcasts[i].title;

            const img = document.createElement('img');
            img.src = 'img/' + realPodcasts[i].img;
            img.alt = realPodcasts[i].title;

            const h3 = document.createElement('h3');
            h3.innerHTML = realPodcasts[i].description;

            divPodcasts.appendChild(img);
            divPodcasts.appendChild(h2);
            divPodcasts.appendChild(h3);
            break;
        }
        divPodcasts.innerHTML = '<p>Nenhum podcast encontrado</p>';
    }
}


// EU PODERIA TER FEITO ISOLANDO CADA PARTE EM FUNÇÕES, MAS FIZ ASSIM MESMO