import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-34",
	localId: 34,

	// Card informations
	name: {
		en: "Linoone",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 264,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/34/high",
		},
	},

	evolveFrom: {
		en: "Zigzagoon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Yuka Morii",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Body Slam",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Claw Swipe",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
