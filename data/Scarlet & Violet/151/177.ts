import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [67],
	set: Set,

	name: {
		fr: "Machopeur",
		en: "Machoke",
		es: "Machoke",
		it: "Machoke",
		pt: "Machoke",
		de: "Maschock"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	evolveFrom: {
		fr: "Machoc",
		en: "Machop",
		es: "Machop",
		it: "Machop",
		pt: "Machop",
		de: "Machollo"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			fr: "Pousse-Montagnes",
			en: "Mountain Ramming",
			es: "Empuje Montaña",
			it: "Speronamonte",
			pt: "Colisão Montanhosa",
			de: "Bergramme"
		},

		effect: {
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			en: "Discard the top card of your opponent's deck.",
			es: "Descarta la primera carta de la baraja de tu rival.",
			it: "Scarta la prima carta del mazzo del tuo avversario.",
			pt: "Descarte a carta de cima do baralho do seu oponente.",
			de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Tetsu Kayama",

	thirdParty: {
		cardmarket: 733646
	}
}

export default card