import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "Takumi Akabane",



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
