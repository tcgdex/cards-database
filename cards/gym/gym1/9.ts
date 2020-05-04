import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-9",
	localId: 9,

	// Card informations
	name: {
		en: "Misty's Seadra",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 117,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/9/high",
		},
	},

	evolveFrom: {
		en: "Horsea",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Tail Snap",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Knockout Needle",
		},
		text: {
			en: "Flip 2 coins. If both of them are heads, this attack does 30 damage plus 60 more damage. If 1 or both of them are tails, this attack does 30 damage.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
