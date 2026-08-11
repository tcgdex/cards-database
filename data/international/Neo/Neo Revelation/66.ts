import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Shining Magikarp",
		'fr-fr': "Magicarpe Brillant",
		'de-de': "Schimmerndes Karpador"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Gold Scale",
				'fr-fr': "Écaille d'or",
				'de-de': "Goldschuppen"
			},
			effect: {
				'en-us': "Your opponent may draw 2 cards. Either way, you may draw 2 cards.",
				'fr-fr': "Votre adversaire peut piocher 2 cartes. Quoi qu'il décide, vous pouvez aussi piocher 2 cartes.",
				'de-de': "Dein Gegner darf 2 Karten ziehen. Unabhängig davon darfst du 2 Karten ziehen."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Dragon Bond",
				'fr-fr': "Lien du Dragon",
				'de-de': "Drachenbund"
			},
			effect: {
				'en-us': "Search your deck for a card named Gyarados, Dark Gyarados, or Shining Gyarados. Show it to your opponent and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte Léviator, Léviator Obscur ou Léviator Brillant dans votre deck. Montrez-la à votre adversaire et placez-la dans votre main. Mélangez ensuite votre deck.",
				'de-de': "Durchsuche dein Deck nach einer Karte namens Garados, Dunkles Garados oder Schimmerndes Garados. Zeige diese Karte deinem Gegner und nimm sie auf deine Hand. Mische danach dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "An underpowered, pathetic Pokémon. It may jump high on rare occasions, but never more than seven feet.",
		'fr-fr': "Un Pokémon faible et pathétique. Il lui arrive de temps en temps de parvenir à sauter assez haut, mais il ne monte jamais au-delà de 2m."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274652,
				tcgplayer: 89166
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274652,
				tcgplayer: 89166
			}
		}
	]
}

export default card

