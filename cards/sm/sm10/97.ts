import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-97",
	localId: 97,

	// Card informations
	name: {
		en: "Quagsire",
		fr: "Maraiste",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 195,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/97/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/97/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/97/high",
		},
	},

	evolveFrom: {
		en: "Wooper",
		fr: "Axoloto",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Surf",
			fr: "Surf",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
