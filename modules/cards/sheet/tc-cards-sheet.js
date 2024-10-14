export default class TCCardsSheet extends CardsConfig {
    constructor(cards, options) {
        super(cards, options);

        this.cards = cards;
        options.submitOnChange = true;
    }

    get template() {
        return `systems/to-change/templates/cards/tc-${this.document.type}-sheet.hbs`;
    }

    static get defaultOptions() {
        const defaultWidth = 870;
        const defaultHeight = 700;
        return foundry.utils.mergeObject(super.defaultOptions, {
            width: defaultWidth,
            height: defaultHeight,
            resizable: true,
            tabs: [
                {
                    navSelector: ".tabs",
                    contentSelector: ".tc-sheet-content",
                    initial: "cards-list"
                }
            ]
        });
    }

    getData(options={}) {
        return {
            cardsSorted: this.getShuffledDeck(),
            document: this.document
        };
    }

    activateListeners(html) {
        super.activateListeners(html);

        html.on('click', '#peek-button', (ev) => {
            this.peekCards();
            this.render();
        });

        html.on('click', '#shuffle-button', (ev) => {
            this.cards.shuffle();
            this.render();
        });
    }

    getShuffledDeck() {
        var cards = this.cards.cards.contents;
        return cards.toSorted((a, b) => this.cards.sortShuffled(a, b));
    }

    peekCards() {
        this.document.system.peeking = true;
        this.getShuffledDeck().forEach(card => {
            card.flip();
        });
    }
}