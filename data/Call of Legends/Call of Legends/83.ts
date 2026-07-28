import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Professor Oak's New Theory",
		fr: "Nouvelle théorie du Prof. Chen",
		de: "Professor Eichs neue Theorie"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Shuffle your hand into your deck. Then, draw 6 cards.",
		de: "Mische deine Handkarten in dein Deck. Ziehe danach 6 Karten.",
		fr: "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88401,
				cardmarket: 279726
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88401,
				cardmarket: 279726
			},
		},
	],

}

export default card
