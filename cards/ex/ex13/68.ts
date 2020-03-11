import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-68",
	localId: 68,

	// Card informations
	name: {
		en: "Lileep δ",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 345,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/68/high",
		},
	},

	evolveFrom: {
		en: "Root Fossil",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Poison Tentacles",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mud Shot",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
