import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie",
		'de-de': "Waaty"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [180],

	hp: 80,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Spark",
				'fr-fr': "Étincelle",
				'de-de': "Spark"
			},
			effect: {
				'en-us': "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for benched Pokémon.)"
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Tail Code",
				'fr-fr': "Queue codée",
				'de-de': "Tail Code"
			},
			effect: {
				'en-us': "Move an Energy card attached to the Defending Pokémon to another of your opponent's Pokémon.",
				'fr-fr': "Déplacez une carte Énergie attachée au Pokémon Défenseur sur un autre des Pokémon de votre adversaire.",
				'de-de': "Move an Energy card attached to the Defending Pokémon to another of your opponent's Pokémon."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "If its coat becomes fully charged with electricity, its tail lights up. It fires hair that zaps on impact."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 85481,
				cardmarket: 278469
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278469,
				tcgplayer: 85481
			}
		}
	],

}

export default card
