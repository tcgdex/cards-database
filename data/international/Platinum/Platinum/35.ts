import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Luvdisc",
		'fr-fr': "Lovdisc",
		'de-de': "Liebiskus"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [370],

	hp: 70,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Love Call",
				'fr-fr': "Appel amoureux",
				'de-de': "Love Call"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. Search your deck for a Pokémon that is the same type as the Pokémon you chose, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Choisissez dans votre deck un Pokémon du même type que le Pokémon que vous avez choisi, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Choose 1 of your opponent's Pokémon. Search your deck for a Pokémon that is the same type as the Pokémon you chose, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Sweet Kiss",
				'fr-fr': "Doux baiser",
				'de-de': "Sweet Kiss"
			},
			effect: {
				'en-us': "Your opponent may draw a card.",
				'fr-fr': "Votre adversaire peut piocher une carte.",
				'de-de': "Your opponent may draw a card."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives in warm seas. It is said that a couple finding this Pokémon will be blessed with eternal love."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86937,
				cardmarket: 278456
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278456,
				tcgplayer: 86937
			}
		}
	],

}

export default card
