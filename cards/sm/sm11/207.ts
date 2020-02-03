import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-207",
	localId: 207,

	// Card informations
	name: {
		en: "Slumbering Forest",
		fr: "Forêt Sommeillante",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/207/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/207/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/207/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/207/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Si un Pokémon est Endormi, son propriétaire lance 2 pièces au lieu d’une pour cet État Spécial entre chaque tour. S’il obtient au moins un côté pile, le Pokémon reste Endormi.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

