import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Gloom",
		'fr-fr': "Ortide",
		'de-de': "Duflor"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [44],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Oddish",
		'fr-fr': "Mystherbe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Cling",
				'fr-fr': "Se cramponner",
				'de-de': "Cling"
			},
			effect: {
				'en-us': "After your attack, remove from Gloom the number of damage counters equal to the damage you did to the Defending Pokémon. If Gloom has fewer damage counters than that, remove all of them.",
				'fr-fr': "Après votre attaque, retirez à Ortide autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur. Si Ortide possède moins de marqueurs de dégât que de dégâts infligés, retirez-les lui tous.",
				'de-de': "After your attack, remove from Gloom the number of damage counters equal to the damage you did to the Defending Pokémon. If Gloom has fewer damage counters than that, remove all of them."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Razor Leaf",
				'fr-fr': "Double tranch'herb",
				'de-de': "Double Razor Leaf"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 40 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 2 coins. This attack does 40 damage times the number of heads."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85782,
				cardmarket: 276109
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85782,
				cardmarket: 276109
			}
		},
	]
}

export default card
