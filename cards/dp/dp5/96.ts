import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-96",
	localId: 96,

	// Card informations
	name: {
		en: "Recover Energy",
		fr: "Énergie guérison",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/96/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/96/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/96/high",
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
			fr: "Énergie guérison fournit de l'Énergie Colorless. Lorsque vous attachez cette carte de votre main à 1 de vos Pokémon, retirez-lui tous ses États Spéciaux.",
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
