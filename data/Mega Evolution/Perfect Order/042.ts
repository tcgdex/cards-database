import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Binacle",
		fr: "Opermine",
		es: "Binacle",
		'es-mx': "Binacle",
		de: "Bithora",
		it: "Binacle",
		pt: "Binacle"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Double Draw",
			fr: "Double Pioche",
			es: "Roba Doble",
			'es-mx': "Doble Robo",
			de: "Zweifachzug",
			it: "Pescata Doppia",
			pt: "Compra Dupla"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			'es-mx': "Roba 2 cartas.",
			de: "Ziehe 2 Karten.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas."
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			'es-mx': "Arañazo",
			de: "Kratzer",
			it: "Graffio",
			pt: "Arranhão"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 684334,
		cardmarket: 877456
	}
}

export default card
