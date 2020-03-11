import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-87",
	localId: 87,

	// Card informations
	name: {
		en: "Bunnelby",
		fr: "Sapereau",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 659,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/87/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/87/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mud Shot",
			fr: "Tir de Boue",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
