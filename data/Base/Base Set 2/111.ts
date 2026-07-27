import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Full Heal",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Your Active Pokémon is no longer Asleep, Confused, Paralyzed, or Poisoned.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274034,
				tcgplayer: 42450
			}
		}
	]
}

export default card
