import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-102",
	localId: 102,

	// Card informations
	name: {
		en: "Switch",
		fr: "Échange",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/102/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/102/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 54,
		name: "Hideaki Hakozaki"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Échangez un de vos Pokémon actifs avec un Pokémon de votre Banc.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
