import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Mr. Fuji",
		'fr-fr': "M. Fuji",
		'de-de': "Mr. Fuji"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Choose a Pokémon on your Bench. Shuffle it and any cards attached to it into your deck.",
		'fr-fr': "Choisissez un Pokémon de votre Banc. Mélangez-le dans votre deck avec toutes les cartes qui lui sont attachées.",
		'de-de': "Wähle ein Pokémon auf deiner Bank. Mische es und alle darauf abgelegten Karten in den Deck."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273919,
				tcgplayer: 44460
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273919,
				tcgplayer: 44460
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
