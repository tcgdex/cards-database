import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
		'de-de': "Flegmon"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [79],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rambunctious Party",
				'fr-fr': "Méga-boum",
				'de-de': "Wilde Party"
			},
			effect: {
				'en-us': "Look at the top 5 cards of your deck. Choose as many Basic Pokémon as you like and put them onto your Bench. Shuffle the other cards back into your deck.",
				'fr-fr': "Regardez les 5 cartes du dessus de votre deck. Choisissez autant de Pokémon de base que vous le voulez et placez-les sur votre Banc. Mélangez les autres cartes avec votre deck.",
				'de-de': "Schau dir die obersten 5 Karten deines Decks an. Wähle beliebig viele Basis-Pokémon-Karten und lege sie auf die Bank. Misch dein Deck anschließend."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Rain Splash",
				'fr-fr': "Pluie éclaboussante",
				'de-de': "Regenplatscher"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "A sweet sap leaks from its tail’s tip. Although not nutritious, the tail is pleasant to chew on."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279319,
				tcgplayer: 89333
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279319,
				tcgplayer: 89333
			}
		}
	],

}

export default card
