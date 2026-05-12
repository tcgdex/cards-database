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
		en: "Provides Colorless Colorless energy. Doesn't count as a basic Energy card.",
	},

	thirdParty: {
		cardmarket: 274047,
		tcgplayer: 42454
	},

	variants: [
		{
			type: "normal",
		}
	]
}

export default card
