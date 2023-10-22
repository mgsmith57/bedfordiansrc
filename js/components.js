class CalendarListElement extends HTMLElement {
    configured = false;

    constructor() {
        super();
    }

    connectedCallback() {
        //this.classList.add('row', 'sage-card-row', 'justify-content-left', 'mb-0');
    }
}
customElements.define('calendar-list', CalendarListElement);

class CalendarNoteElement extends HTMLElement {
    configured = false;
    bodyCopy;
    constructor() {
        super();
    }

    connectedCallback() {
        if (this.configured) {
            return;
        }

        this.bodyCopy = this.innerHTML;
        this.configured = true;
    }
}

customElements.define('calendar-note', CalendarNoteElement);

class CalendarEventElement extends HTMLElement {
    configured = false;
    bodyCopy;
    date;
    organiser;

    constructor() {
        super();
    }

    connectedCallback() {
        if (this.configured) {
            return;
        }

        if (this.configured) {
            return;
        }

        this.date = new Date(this.getAttribute('date'));
        const organiser = this.getAttribute('organiser');

        // const datem = moment(this.getAttribute('date')).add(1, 'day');
        // const now = moment();
        // if (datem.isBefore(now)) {
        //     url = null;
        // }
        // if (datem.isBefore(now.subtract(1, 'month'))) {
        //     this.remove();
        //     return;
        // }

        const formatter = new Intl.DateTimeFormat(
            document.documentElement.lang ? document.documentElement.lang : navigator.language,
            { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit' });
        const dateParts = new Map(formatter.formatToParts(new Date(date))
            .map(o => [o.type, o.value]));

        this.bodyCopy = this.innerHTML;
        this.innerHTML = `
            <div>Hello</div>
        `;
    }
}
customElements.define('calendar-event', CalendarEventElement);

