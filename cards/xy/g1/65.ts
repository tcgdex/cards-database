import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-65",
	localId: 65,

	// Card informations
	name: {
		en: "Max Revive",
		fr: "Rappel Max",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/65/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/65/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/65/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/65/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Mettez un Pokémon de votre pile de défausse sur le dessus de votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card

