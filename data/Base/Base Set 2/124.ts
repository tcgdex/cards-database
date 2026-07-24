import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Double Colorless Energy",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "Provides {C}{C} energy. Doesn't count as a basic Energy card.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274047,
				tcgplayer: 42454
			}
		}
	]
}

export default card
