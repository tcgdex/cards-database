import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-27",
	localId: 27,

	// Card informations
	name: {
		en: "Team Aqua's Great Ball",
		fr: "Super Ball de la Team Aqua",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/27/low",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/27/high",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/27/high",
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
			fr: "Cherchez un Pokémon de base de la Team Aqua et une carte Énergie Water de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
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
