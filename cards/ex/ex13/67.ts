import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-67",
	localId: 67,

	// Card informations
	name: {
		en: "Kabuto δ",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 140,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/67/high",
		},
	},

	evolveFrom: {
		en: "Mysterious Fossil",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Eerie Light",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shell Attack",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
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
