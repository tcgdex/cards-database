import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Cheerleader's Cheer",
		fr: "Encouragements hystériques",
		de: "Cheerleader-Jubel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Draw 3 cards. Your opponent may draw a card.",
		de: "Ziehe 3 Karten. Dein Gegner kann 1 Karte ziehen.",
		fr: "Piochez 3 cartes. Votre adversaire peut piocher une carte.",
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84247,
				cardmarket: 279719
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84247,
				cardmarket: 279719
			},
		},
	],

}

export default card
