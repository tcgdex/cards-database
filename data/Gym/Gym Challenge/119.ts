import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Rocket's Minefield Gym",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play after being played. Discard this card if another Stadium card comes into play. Whenever a player puts a Basic Pokémon onto his or her Bench from his or her hand, he or she flips a coin. If tails, put damage counters on that Pokémon.",
	},
	thirdParty: {
		cardmarket: 274387,
		tcgplayer: 88779
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "text-error"
		}
	]
}

export default card
