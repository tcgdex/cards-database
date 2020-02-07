import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-185",
	localId: 185,

	// Card informations
	name: {
		en: "Vitality Band",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/185/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/185/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],





	attacks: [{
		name: {},
		text: {
			en: "The attacks of the Pokémon this card is attached to do 10 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

