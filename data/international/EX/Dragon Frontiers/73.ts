import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Copycat",
		fr: "Copieuse",
		de: "Nachahmerin"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Shuffle your hand into your deck. Then, count the number of cards in your opponent's hand and draw that many cards.",
		fr: "Mélangez votre main à votre deck. Ensuite, comptez le nombre de cartes dans la main de votre adversaire et piochez autant de cartes.",
		de: "Mische deine Handkarten in dein Deck. Zähle danach die Anzahl der Karten auf der Hand deines Gegners. Ziehe ebenso viele Karten.",
	},

	thirdParty: {
		cardmarket: 277278,
		tcgplayer: 84425
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jun-hasebe"]
		},
		{
			type: "normal",
			stamp: ["akira-miyazaki"]
		},
		{
			type: "normal",
			stamp: ["dylan-lefavour"]
		},
		{
			type: "normal",
			stamp: ["tristan-robinson"]
		}
	]
}

export default card
