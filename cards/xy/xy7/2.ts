import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-2",
	localId: 2,

	// Card informations
	name: {
		en: "Gloom",
		fr: "Ortide",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 44,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/2/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/2/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/2/high",
		},
	},

	evolveFrom: {
		en: "Oddish",
		fr: "Mystherbe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Drool",
			fr: "Gluant",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
