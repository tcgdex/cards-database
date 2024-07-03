import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [99],
	set: Set,

	name: {
		fr: "Krabboss",
		en: "Kingler",
		es: "Kingler",
		it: "Kingler",
		pt: "Kingler",
		de: "Kingler"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			fr: "Marto-Poing",
			en: "Hammer Arm",
			es: "Machada",
			it: "Martelpugno",
			pt: "Braço de Martelo",
			de: "Hammerarm"
		},

		effect: {
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			en: "Discard the top card of your opponent's deck.",
			es: "Descarta la primera carta de la baraja de tu rival.",
			it: "Scarta la prima carta del mazzo del tuo avversario.",
			pt: "Descarte a carta de cima do baralho do seu oponente.",
			de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		},

		damage: 90
	}, {
		cost: ["Water", "Water", "Water", "Water"],

		name: {
			fr: "Guillotine",
			en: "Guillotine",
			es: "Guillotina",
			it: "Ghigliottina",
			pt: "Guilhotina",
			de: "Guillotine"
		},

		damage: 220
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card