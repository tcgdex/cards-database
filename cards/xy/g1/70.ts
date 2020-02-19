import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-70",
	localId: 70,

	// Card informations
	name: {
		en: "Revitalizer",
		fr: "Revitalisation",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/70/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/70/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/70/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/70/high.png",
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
			fr: "Ajoutez 2 Pokémon Grass de votre pile de défausse à votre main.",
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

