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

	dexId: [370],

	hp: 70,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Love Call",
				fr: "Appel amoureux",
				de: "Liebesruf"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. Search your deck for a Pokémon that is the same type as the Pokémon you chose, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Choisissez dans votre deck un Pokémon du même type que le Pokémon que vous avez choisi, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
				de: "Wähle 1 Pokémon deines Gegners. Durchsuche dein Deck nach 1 Pokémon-Karte, die den gleichen Typ wie das gewählte Pokémon hat, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Sweet Kiss",
				fr: "Doux baiser",
				de: "Bitterkuss"
			},
			effect: {
				en: "Your opponent may draw a card.",
				fr: "Votre adversaire peut piocher une carte.",
				de: "Dein Gegner kann 1 Karte ziehen."
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
		en: "It lives in warm seas. It is said that a couple finding this Pokémon will be blessed with eternal love.",
		de: "Es lebt in warmen Meeren. Man sagt, dass Verliebte, die es sehen, mit ewiger Liebe gesegnet sind."
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
