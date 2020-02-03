import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-140",
	localId: 140,

	// Card informations
	name: {
		en: "Heavy Ball",
		fr: "Masse Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/140/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/140/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/140/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/140/high.png",
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
			fr: "Cherchez dans votre deck un Pokémon avec un Coût de Retraite de 3 ou plus, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card

