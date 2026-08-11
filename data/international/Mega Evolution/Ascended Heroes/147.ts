import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bisharp",
		'fr-fr': "Scalproie",
		'es-es': "Bisharp",
		'es-mx': "Bisharp",
		'de-de': "Caesurio",
		'it-it': "Bisharp",
		'pt-br': "Bisharp"
	},

	evolveFrom: {
		'en-us': "Pawniard",
		'fr-fr': "Scalpion",
		'es-es': "Pawniard",
		'es-mx': "Pawniard",
		'de-de': "Gladiantri",
		'it-it': "Pawniard",
		'pt-br': "Pawniard",
	},

	illustrator: "Scav",
	rarity: "Common",
	category: "Pokemon",
	dexId: [625],
	hp: 120,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Rapid Draw",
			'fr-fr': "Pioche Rapide",
			'es-es': "Robo Rápido",
			'es-mx': "Robo Rápido",
			'de-de': "Schnellzieher",
			'it-it': "Pescalesto",
			'pt-br': "Retirada Rápida"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'es-mx': "Roba 2 cartas.",
			'de-de': "Ziehe 2 Karten.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "Bisharp mercilessly cuts its opponents to pieces with the sharp blades covering its body. It will do anything to win.",
	},

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
		foil: "quickball",
		thirdParty: {
			cardmarket: 870366,
			tcgplayer: 676967
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870365,
			tcgplayer: 677107
		}
	},
],
}

export default card
