import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Premier Ball",
		'fr-fr': "Honor ball",
		'de-de': "Premierball"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Search your deck or your discard pile for a Pokémon LV.X, show it to your opponent, and put it into your hand. If you search your deck, shuffle your deck afterward.",
		'fr-fr': "Choisissez dans votre deck ou votre pile de défausse un Pokémon NIV.X, montrez-la à votre adversaire et placez-le dans votre main. Si vous cherchez dans votre deck, mélangez-le.",
		'de-de': "Durchsuche dein Deck oder deinen Ablagestapel nach 1 Pokémon LV.X-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Falls du dein Deck durchsucht hast, mische es danach."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278389,
		tcgplayer: 88357
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["david-cohen"]
		},
	]
}

export default card
