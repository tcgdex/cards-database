import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Ampharos",
		'fr-fr': "Pharamp",
	},
	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		181,
	],
	hp: 140,
	types: [
		"Lightning",
	],
	evolveFrom: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Random Spark",
				'fr-fr': "Étincelle Surprise",
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à 1 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Electricannon",
				'fr-fr': "Canon Électrique",
			},
			effect: {
				'en-us': "You may discard all Lightning Energy attached to this Pokémon. If you do, this attack does 60 more damage.",
				'fr-fr': "Vous pouvez défausser toutes les Énergies Lightning attachées à ce Pokémon. Dans ce cas, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,




	description: {
		'en-us': "The tip of its tail shines brightly. In the olden days, people sent signals using the tail's light.",
	},
}

export default card
