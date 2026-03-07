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

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869758,
			tcgplayer: 675959
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869758,
			tcgplayer: 675959
		}
	},
	{
		type: "reverse",
		foil: "quickball",
		thirdParty: {
			cardmarket: 870365,
			tcgplayer: 676967
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870366,
			tcgplayer: 677107
		}
	},
],
}

export default card