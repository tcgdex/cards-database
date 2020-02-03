import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-76",
	localId: 76,

	// Card informations
	name: {
		en: "Level Ball",
		fr: "Niveau Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/76/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/76/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/76/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/76/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez dans votre deck un Pokémon avec 90 PV ou moins, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card

