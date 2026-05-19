import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Mr. Fuji",
		fr: "M. Fuji",
		de: "Mr. Fuji"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Choose a Pokémon on your Bench. Shuffle it and any cards attached to it into your deck.",
		fr: "Choisissez un Pokémon de votre Banc. Mélangez-le dans votre deck avec toutes les cartes qui lui sont attachées.",
		de: "Wähle ein Pokémon auf deiner Bank. Mische es und alle darauf abgelegten Karten in den Deck."
	},

	thirdParty: {
		cardmarket: 273919,
		tcgplayer: 44460
	},

	variants: [
		{
			type: "normal",
			foil: "galaxy"
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy"
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
