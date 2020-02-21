import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY33",
	localId: "XY33",

	// Card informations
	name: {
		en: "Trevor",
		fr: "Trovato",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY33/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY33/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY33/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
