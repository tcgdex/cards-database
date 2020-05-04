import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-96",
	localId: 96,

	// Card informations
	name: {
		en: "Wooper",
		fr: "Axoloto",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 194,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/96/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/96/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "tetsuya koizumi",



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Mud Bomb",
			fr: "Boue-Bombe",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
