import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-67",
	localId: 67,

	// Card informations
	name: {
		en: "Switch",
		fr: "Échange",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/67/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/67/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Échangez votre Pokémon Actif avec l’un de vos Pokémon de Banc.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
