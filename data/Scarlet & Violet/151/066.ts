import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [66],
	set: Set,

	name: {
		fr: "Machoc",
		en: "Machop",
		es: "Machop",
		it: "Machop",
		pt: "Machop",
		de: "Machollo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Écrase-Montagnes",
			en: "Mountain Mashing",
			es: "Aplastamiento Montaña",
			it: "Percuotimonte",
			pt: "Esmagamento Montanhoso",
			de: "Bergzermalmer"
		},

		effect: {
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			en: "Discard the top card of your opponent's deck.",
			es: "Descarta la primera carta de la baraja de tu rival.",
			it: "Scarta la prima carta del mazzo del tuo avversario.",
			pt: "Descarte a carta de cima do baralho do seu oponente.",
			de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			fr: "Koud'Poing",
			en: "Punch",
			es: "Puño",
			it: "Pugno",
			pt: "Soco",
			de: "Boxhieb"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Ryuta Fuse"
}

export default card