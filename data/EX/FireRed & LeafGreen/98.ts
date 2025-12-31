import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Prof. Oak's Research",
		fr: "La recherche du Prof. Chen",
		de: "Professor Eichs Nachforschunge"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-la.\n\nMélangez votre main avec votre deck. Ensuite, piochez 5 cartes.",
		de: "Mische deine Hand in dein Deck, und ziehe dann 5 Karten."
	},

	thirdParty: {
		tcgplayer: 88403
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		},
		{
			type: "normal",
			stamp: ["professor-program"]
		},
	]
}

export default card
