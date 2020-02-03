import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-94",
	localId: 94,

	// Card informations
	name: {
		en: "Health Energy",
		fr: "Énergie santé",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/94/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/94/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/94/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/94/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 51,
		name: "Takumi Akabane"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Énergie santé fournit de l'Énergie Colorless. Lorsque vous attachez cette carte de votre main à 1 de vos Pokémon, retirez-lui 1 marqueur de dégât.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card

