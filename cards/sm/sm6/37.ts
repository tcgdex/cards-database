import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-37",
	localId: 37,

	// Card informations
	name: {
		en: "Helioptile",
		fr: "Galvaran",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 694,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/37/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/37/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/37/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Whap",
			fr: "Queue Battoir",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
