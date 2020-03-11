import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-37",
	localId: 37,

	// Card informations
	name: {
		en: "Seadra δ",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 117,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/37/high",
		},
	},

	evolveFrom: {
		en: "Horsea",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hisao Nakamura",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Ram",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Extra Ball",
		},
		text: {
			en: "If the Defending Pokémon is Pokémon-ex, this attack does 30 damage plus 30 more damage.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
