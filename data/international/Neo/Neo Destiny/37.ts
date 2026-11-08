import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Dark Omanyte",
		'fr-fr': "Amonita obscur",
		'de-de': "Dunkles Amonitas"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		138,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Water Cannon",
				'fr-fr': "Artillerie à O",
				'de-de': "Water Cannon"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each Energy card attached to Dark Omanyte. Don't apply Weakness and Resistance. You can't do more than 30 damage in this way.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque inflige 10 dégâts pour chaque  carte Énergie attachée à Amonita obscur. N'appliquez ni la Faiblesse, ni la Résistance. Vous ne pouvez pas infliger plus de 30 dégâts de cette manière.",
				'de-de': "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each  Energy card attached to Dark Omanyte. Don't apply Weakness and Resistance. You can't do more than 30 damage in this way."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "This ancient Pokémon possessed 10 tentacles, which it used to swim through the ocean.",
		'fr-fr': "Ce Pokémon antique possédait 10 tentacules, qu'il utilisait pour nager dans l'océan."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274689,
				tcgplayer: 84634
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274689,
				tcgplayer: 84634
			}
		}
	]
}

export default card
