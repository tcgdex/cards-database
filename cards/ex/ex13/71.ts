import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-71",
	localId: 71,

	// Card informations
	name: {
		en: "Meowth δ",
	},

	hp: 50,

	type: [
		Type.DARKNESS,
		Type.METAL,
	],

	dexId: 52,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/71/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Slash",
		},
		damage: 10
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Pay Day",
		},
		text: {
			en: "Draw a card.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
