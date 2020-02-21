import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-35",
	localId: 35,

	// Card informations
	name: {
		en: "Buizel",
		fr: "Mustébouée",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 418,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/35/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/35/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/35/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 143,
		name: "so-taro"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
