import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [339],

	name: {
		'en-us': "Barboach",
		'fr-fr': "Barloche",
		'es-es': "Barboach",
		'it-it': "Barboach",
		'pt-br': "Barboach",
		'de-de': "Schmerbe"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Razor Fin",
				'fr-fr': "Aileron-Rasoir",
				'es-es': "Aleta Afilada",
				'it-it': "Pinnalama",
				'pt-br': "Barbatana Cortante",
				'de-de': "Rasierflosse"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 70,
	types: ["Fighting"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Its slimy body is hard to grasp. In one region, it is said to have been born from hardened mud."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457908,
				tcgplayer: 213187
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457908,
				tcgplayer: 213187
			}
		},
	],
}

export default card
