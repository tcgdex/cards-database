import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Copycat",
		de: "Nachahmerin"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Shuffle your hand into your deck. Then, count the number of cards in your opponent's hand and draw that many cards.",
		de: "Shuffle your hand into your deck. Then, count the number of cards in your opponent's hand an draw that many cards."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276375,
				tcgplayer: 84424
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276375,
				tcgplayer: 84424
			},
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"],
			thirdParty: {
				cardmarket: 276375,
				tcgplayer: 84424
			},
		},
		{
			type: "normal",
			stamp: ["michael-gonzalez"],
			thirdParty: {
				cardmarket: 276375,
				tcgplayer: 477504
			},
		},
		{
			type: "normal",
			stamp: ["jeremy-maron"],
			thirdParty: {
				cardmarket: 276375,
				tcgplayer: 477505
			},
		},
		{
			type: "normal",
			stamp: ["hiroki-yano"],
			thirdParty: {
				cardmarket: 276375,
				tcgplayer: 477604
			},
		},
		{
			type: "normal",
			stamp: ["jimmy-ballard"],
			thirdParty: {
				cardmarket: 477604,
				tcgplayer: 84424
			},
		},
	],

}

export default card
