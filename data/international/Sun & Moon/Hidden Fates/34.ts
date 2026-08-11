import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Graveler",
		'fr-fr': "Gravalanch",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		75,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Geodude",
		'fr-fr': "Racaillou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mudslide",
				'fr-fr': "Coulée de Boue",
			},
			effect: {
				'en-us': "Discard 2 Fighting Energy from this Pokémon. This attack does 80 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Défaussez 2 Énergies Fighting de ce Pokémon. Cette attaque inflige 80 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It climbs up cliffs as it heads toward the peak of a mountain. As soon as it reaches the summit, it rolls back down the way it came.",
	},

	thirdParty: {
		cardmarket: 394682,
		tcgplayer: 197678
	}
}

export default card
