/**classe estática para gerar o data-set dos elementos e transforma-los para o padrão camel case */
export class Format {

    /* formata todos os IDs separados por traço em camelcase */
    static getCamelCase(text) {

        let div = document.createElement('div');

        div.innerHTML = `<div data-${text}="id"></div>`;

        return Object.keys(div.firstChild.dataset)[0];
    }

    /* formata as horas, minutos e segundos */
    static toTime(duration) {

        let seconds = parseInt((duration / 1000) % 60);
        let minutes = parseInt((duration / (1000 * 60)) % 60);
        let hours = parseInt((duration / (1000 * 60 * 60)) % 24);

        if (hours > 0) {

            return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

        } else {

            return `${minutes}:${seconds.toString().padStart(2, '0')}`
        }

    }

}