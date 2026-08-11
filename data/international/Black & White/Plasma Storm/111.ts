import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Patrat",
		'fr-fr': "Ratentif",
		'es-es': "Patrat",
		'it-it': "Patrat",
		'pt-br': "Patrat",
		'de-de': "Nagelotz"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		504,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Collect",
				'fr-fr': "Collecte",
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slam",
				'fr-fr': "Souplesse",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Extremely cautious, there is always one keeping watch, but they don't notice enemies coming from behind.",
	},

	thirdParty: {
		cardmarket: 280850,
		tcgplayer: 87966
	}
}

export default card
