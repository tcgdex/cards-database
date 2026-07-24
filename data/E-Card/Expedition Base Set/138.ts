import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Copycat",
		fr: "Copieuse",
		de: "Nachahmerin"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Shuffle your hand into your deck. Then, count the number of cards in your opponent's hand and draw that many cards.",
		fr: "Mélangez votre main avec votre deck. Comptez ensuite le nombre de cartes dans la main de votre adversaire et piochez autant de cartes.",
		de: "Mische deine Hand in dein Deck. Zähle dann die Anzahl an Karten auf der Hand deines Gegners und ziehe so viele Karten.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84423,
				cardmarket: 275013
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84423,
				cardmarket: 275013
			},
		},
		{
			type: "normal",
			stamp: ["chris-fulop"]
		},
		{
			type: "normal",
			stamp: ["tsuguyoshi-yamato"]
		},
		{
			type: "normal",
			stamp: ["reed-weichler"]
		}
	],
}

export default card
