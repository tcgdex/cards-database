import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [14],

	name: {
		'en-us': "Kakuna",
		'fr-fr': "Coconfort",
		'es-es': "Kakuna",
		'it-it': "Kakuna",
		'pt-br': "Kakuna",
		'de-de': "Kokuna"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Weedle",
		'fr-fr': "Aspicot"
	},

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Bug Bite",
				'fr-fr': "Piqûre",
				'es-es': "Picadura",
				'it-it': "Coleomorso",
				'pt-br': "Picada",
				'de-de': "Käferbiss"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		'en-us': "While awaiting evolution, it hides from predators under leaves and in nooks of branches."
	},

	thirdParty: {
		cardmarket: 499870,
		tcgplayer: 222997
	}
}

export default card
