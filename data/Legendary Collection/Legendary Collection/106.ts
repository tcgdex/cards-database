import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Challenge!",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Ask your opponent if he or she accepts your challenge. If your opponent declines (or if both Benches are full), draw 2 cards. If your opponent accepts, each of you searches your decks for any number of Basic Pokémon cards and puts them face down onto your Benches. (A player can't do this if his or her Bench is full.) When you both have finished, shuffle your decks and turn those cards face up.",
	},

	thirdParty: {
		cardmarket: 274871,
		tcgplayer: 84160
	},

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	]
}

export default card
