import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-48",
	localId: 48,

	// Card informations
	name: {
		en: "Roggenrola",
		fr: "Nodulithe",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 524,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/48/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/48/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/48/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
