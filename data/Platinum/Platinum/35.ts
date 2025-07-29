import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Luvdisc",
		fr: "Lovdisc",
		de: "Liebiskus"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		370,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Love Call",
				fr: "Appel amoureux",
				de: "Love Call"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. Search your deck for a Pokémon that is the same type as the Pokémon you chose, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Choisissez dans votre deck un Pokémon du même type que le Pokémon que vous avez choisi, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
				de: "Choose 1 of your opponent's Pokémon. Search your deck for a Pokémon that is the same type as the Pokémon you chose, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Sweet Kiss",
				fr: "Doux baiser",
				de: "Sweet Kiss"
			},
			effect: {
				en: "Your opponent may draw a card.",
				fr: "Votre adversaire peut piocher une carte.",
				de: "Your opponent may draw a card."
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

	thirdParty: {
		cardmarket: 278456
	}
}

export default card
