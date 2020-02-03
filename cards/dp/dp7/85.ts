import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-85",
	localId: 85,

	// Card informations
	name: {
		en: "Great Ball",
		fr: "Great Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/85/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/85/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/85/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/85/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez dans votre deck un Pokémon de base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

