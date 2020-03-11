import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-38",
	localId: 38,

	// Card informations
	name: {
		en: "Kabuto",
		fr: "Kabuto",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 140,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/38/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/38/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/38/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.RESTORED,
	],

	illustrator: "MAHOU",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Mud Shot",
			fr: "Tir de Boue",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
