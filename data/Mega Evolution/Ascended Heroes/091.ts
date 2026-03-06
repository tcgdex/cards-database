import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Banette",
		fr: "Branette",
		es: "Banette",
		'es-mx': "Banette",
		de: "Banette",
		it: "Banette",
		pt: "Banette"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",
	dexId: [354],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Cursed Words",
			fr: "Paroles Maudites",
			es: "Palabras Malditas",
			'es-mx': "Palabras Malditas",
			de: "Verfluchte Worte",
			it: "Parole Maledette",
			pt: "Rogar Praga"
		},

		effect: {
			en: "Your opponent chooses 3 cards from their hand and shuffles those cards into their deck.",
			fr: "Votre adversaire choisit 3 cartes de sa main et les mélange avec son deck.",
			es: "Tu rival elige 3 cartas de su mano, las pone en su baraja y las baraja todas.",
			'es-mx': "Tu rival elige 3 cartas de su mano, las pone en su mazo y las baraja todas.",
			de: "Dein Gegner wählt 3 Karten aus seiner Hand und mischt jene Karten in sein Deck.",
			it: "Il tuo avversario sceglie tre carte che ha in mano e le rimischia nel suo mazzo.",
			pt: "Seu oponente escolhe 3 cartas da mão dele e embaralha aquelas cartas no baralho dele."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Spooky Shot",
			fr: "Tir Effrayant",
			es: "Disparo Embrujado",
			'es-mx': "Disparo Espeluznante",
			de: "Spukschuss",
			it: "Colpomistero",
			pt: "Tiro Assustador"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675903,
		cardmarket: 869702
	}
}

export default card