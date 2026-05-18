import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Professor Oak's Visit",
		fr: "La visite du Prof. Chen",
		de: "Professor Eichs Besuch"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Draw 3 cards. Then, choose a card from your hand and put it on the bottom of your deck.",
		fr: "Piochez 3 cartes. Ensuite, choisissez une carte de votre main et placez-la au dessous de votre deck.",
		de: "Ziehe 3 Karten. Danach wähle 1 Karte von deiner Hand und lege sie unter dein Deck."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 277875,
		tcgplayer: 88405
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["professor-program"]
		}
	]
}

export default card
