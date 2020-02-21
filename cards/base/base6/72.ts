import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base6-72",
	localId: 72,

	// Card informations
	name: {
		en: "Dratini",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 147,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base6/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pound",
		},
		damage: 10
	}],



	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card
