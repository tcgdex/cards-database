import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-129",
	localId: 129,

	// Card informations
	name: {
		en: "Rufflet",
		fr: "Furaiglon",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 627,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/129/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/129/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/129/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/129/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Peck",
			fr: "Picpic",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
