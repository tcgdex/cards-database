import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-92",
	localId: 92,

	// Card informations
	name: {
		en: "Swoop! Teleporter",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/92/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/92/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ROCKETSECRETMACHINE,
	],

	illustrator: {
		id: 76,
		name: "Katsura Tabata"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card

