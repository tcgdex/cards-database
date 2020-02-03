import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-70",
	localId: 70,

	// Card informations
	name: {
		en: "Warp Energy",
		fr: "Énergie de Distorsion",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/70/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/70/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/70/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/70/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],





	attacks: [{
		name: {},
		text: {
			fr: "Cette carte fournit de l’Énergie Colorless. \n\nLorsque vous attachez cette carte de votre main à votre Pokémon Actif, échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card

