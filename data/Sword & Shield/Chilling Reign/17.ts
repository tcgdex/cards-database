import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Thwackey",
		fr: "Badabouin",
		es: "Thwackey",
		it: "Thwackey",
		pt: "Thwackey",
		de: "Chimstix"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		en: "Grookey",
		fr: "Ouistempo"
	},

	attacks: [{
		name: {
			en: "Knock Off",
			fr: "Sabotage",
			es: "Desarme",
			it: "Privazione",
			pt: "Derrubar",
			de: "Abschlag"
		},

		effect: {
			en: "Discard a random card from your opponent’s hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
			es: "Descarta 1 carta aleatoria de la mano de tu rival.",
			it: "Scarta una carta a caso dalla mano del tuo avversario.",
			pt: "Descarte 1 carta aleatória da mão do seu oponente.",
			de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card