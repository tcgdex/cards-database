import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Noibat",
		fr: "Sonistrelle",
		es: "Noibat",
		de: "eF-eM",
		it: "Noibat",
		pt: "Noibat",
		'es-mx': "Noibat"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rapid Draw",
			fr: "Pioche Rapide",
			es: "Robo Rápido",
			de: "Schnellzieher",
			it: "Pescalesto",
			pt: "Retirada Rápida",
			'es-mx': "Robo Rápido"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			de: "Ziehe 1 Karte.",
			it: "Pesca una carta.",
			pt: "Compre uma carta.",
			'es-mx': "Roba 1 carta."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": false,
		"wPromo": false,
		}
}

export default card
