import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Bisharp",
		fr: "Scalproie",
		es: "Bisharp",
		'es-mx': "Bisharp",
		de: "Caesurio",
		it: "Bisharp",
		pt: "Bisharp"
	},

	illustrator: "Scav",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	stage: "Stage1",
	dexId: [625],

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Rapid Draw",
			fr: "Pioche Rapide",
			es: "Robo Rápido",
			'es-mx': "Robo Rápido",
			de: "Schnellzieher",
			it: "Pescalesto",
			pt: "Retirada Rápida"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			'es-mx': "Roba 2 cartas.",
			de: "Ziehe 2 Karten.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675959,
		cardmarket: 869758
	}
}

export default card