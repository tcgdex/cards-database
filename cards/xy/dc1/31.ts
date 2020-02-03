import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-31",
	localId: 31,

	// Card informations
	name: {
		en: "Team Magma's Great Ball",
		fr: "Super Ball de la Team Magma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/31/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/31/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/31/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/31/high.png",
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
			fr: "Cherchez un Pokémon de base de la Team Magma et une carte Énergie Fighting de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card

