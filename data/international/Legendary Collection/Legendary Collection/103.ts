import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Pokémon Trader"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Trade 1 of the Basic Pokémon or Evolution cards in your hand for 1 of the Basic Pokémon or Evolution cards from your deck. Show both cards to your opponent. Shuffle your deck afterward."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274868,
				tcgplayer: 88242
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274868,
				tcgplayer: 88242
			}
		}
	],

	retreat: 0
}

export default card
