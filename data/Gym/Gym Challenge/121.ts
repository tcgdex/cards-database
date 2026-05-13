import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Sabrina's Psychic Control",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Flip a coin. If heads, choose a Trainer card in your opponent's discard pile that isn't put in play (like PlusPower or Mysterious Fossil). You may use that card as if it were in your hand, if you do everything required in order to play that card (like discarding cards). The card stays in your opponent's discard pile.",
	},
	thirdParty: {
		cardmarket: 274389,
		tcgplayer: 88886
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		},
	]
}

export default card
