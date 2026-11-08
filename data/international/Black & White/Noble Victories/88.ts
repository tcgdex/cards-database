import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Haxorus",
		'fr-fr': "Tranchodon",
		'es-es': "Haxorus",
		'it-it': "Haxorus",
		'pt-br': "Haxorus",
		'de-de': "Maxax"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		612,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Fraxure",
		'fr-fr': "Incisache",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dual Chop",
				'fr-fr': "Double Baffe",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 50 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Giga Impact",
				'fr-fr': "Giga Impact",
			},
			effect: {
				'en-us': "This Pokémon can't attack during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			},
			damage: 120,

		},
	],

	retreat: 2,

	description: {
		'en-us': "They are kind but can be relentless when defending territory. They challenge foes with tusks that can cut steel.",
	},

	thirdParty: {
		cardmarket: 280211,
		tcgplayer: 86032
	}
}

export default card
