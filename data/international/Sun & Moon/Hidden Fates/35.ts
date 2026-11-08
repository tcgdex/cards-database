import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Golem",
		'fr-fr': "Grolem",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		76,
	],

	hp: 170,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Graveler",
		'fr-fr': "Gravalanch",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rock Slide",
				'fr-fr': "Éboulement",
			},
			effect: {
				'en-us': "This attack does 20 damage to 3 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à 3 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Land Crush",
				'fr-fr': "Écras’Terre",
			},

			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "When Golem grow old, they stop shedding their shells. Those that have lived a long, long time have shells green with moss.",
	},

	thirdParty: {
		cardmarket: 394697,
		tcgplayer: 197679
	}
}

export default card
