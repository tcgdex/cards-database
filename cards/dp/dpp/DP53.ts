import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP53",
	localId: "DP53",

	// Card informations
	name: {
		en: "Arceus",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 493,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP53/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Shizurow",

	abilities: [{
		id: 180,
		type: AbilityType.POKEBODY,
		name: {
			en: "Multitype",
		},
		text: {
			en: "Arceus LV.X's type is the same type as its previous Level.",
		}
	}],









	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card
