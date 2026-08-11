import { Card } from 'models/database/card'
import Set from '../DP trainer Kit (Manaphy)'

const card: Card = {
	dexId: [394],
	set: Set,

	name: {
		'en-us': "Prinplup",
		'fr-fr': "Prinplouf"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Piplup",
		'fr-fr': "Tiplouf"
	},

	attacks: [
		{
			cost: [
				"Water"
			],
			name: {
				'en-us': "Aqua Shower",
				'fr-fr': "Aqua-douche"
			},
			effect: {
				'en-us': "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			}
		},
		{
			cost: [
				"Water",
				"Water"
			],
			name: {
				'en-us': "Brine",
				'fr-fr': "Saumure"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon that has any damage counters on it. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire possédant des marqueurs de dégât. Cette attaque lui inflige 40 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			}
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	description: {
		'en-us': "It lives alone, away from others. Apparently, every one of them believes it is the most important."
	},

	retreat: 1,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278020,
				tcgplayer: 88369
			}
		},
	],

}

export default card
