import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Banette",
		fr: "Branette",
		es: "Banette",
		de: "Banette",
		it: "Banette",
		pt: "Banette",
		'es-mx': "Banette"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Cursed Words",
			fr: "Paroles Maudites",
			es: "Palabras Malditas",
			de: "Verfluchte Worte",
			it: "Parole Maledette",
			pt: "Rogar Praga",
			'es-mx': "Palabras Malditas"
		},

		effect: {
			en: "Your opponent chooses 3 cards from their hand and shuffles those cards into their deck.",
			fr: "Votre adversaire choisit 3 cartes de sa main et les mélange avec son deck.",
			es: "Tu rival elige 3 cartas de su mano, las pone en su baraja y las baraja todas.",
			de: "Dein Gegner wählt 3 Karten aus seiner Hand und mischt jene Karten in sein Deck.",
			it: "Il tuo avversario sceglie tre carte che ha in mano e le rimischia nel suo mazzo.",
			pt: "Seu oponente escolhe 3 cartas da mão dele e embaralha aquelas cartas no baralho dele.",
			'es-mx': "Tu rival elige 3 cartas de su mano, las pone en su mazo y las baraja todas."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Spooky Shot",
			fr: "Tir Effrayant",
			es: "Disparo Embrujado",
			de: "Spukschuss",
			it: "Colpomistero",
			pt: "Tiro Assustador",
			'es-mx': "Disparo Espeluznante"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
