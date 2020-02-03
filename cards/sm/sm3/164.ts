import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-164",
	localId: 164,

	// Card informations
	name: {
		en: "Multi Switch",
		fr: "Échange Multiple",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/164/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/164/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/164/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/164/high.png",
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
			fr: "Déplacez une Énergie de l’un de vos Pokémon de Banc vers votre Pokémon Actif.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card

