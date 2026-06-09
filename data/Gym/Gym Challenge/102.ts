import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Chaos Gym",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play after being played. Discard this card if another Stadium card comes into play. Whenever a player plays a Trainer card other than a Stadium card, he or she flips a coin. If heads, that player plays that card normally. If tails, the player can't play that card. If the card isn't put into play, the player's opponent may use that card instead, if he or she does everything required in order to play that card (like discarding cards). Either way, the card goes to its owner's discard pile.",
	},
	thirdParty: {
		cardmarket: 274370,
		tcgplayer: 84181
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
