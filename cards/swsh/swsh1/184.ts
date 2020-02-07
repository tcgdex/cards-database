import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-184",
	localId: 184,

	// Card informations
	name: {
		en: "Team Yell Grunt",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/184/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/184/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],





	attacks: [{
		name: {},
		text: {
			en: "Put an Energy attached to 1 of your opponent’s Pokémon into their hand.",
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

