import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-18",
	localId: 18,

	// Card informations
	name: {
		en: "Team Aqua's Sharpedo",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 319,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/18/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Katsura Tabata",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slow-Acting Poison",
		},
		text: {
			en: "At the end of your opponent's next turn, the Defending Pokémon is now Poisoned.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Smash",
		},
		text: {
			en: "If the Defending Pokémon is affected by a Special Condition, this attack does 50 damage plus 20 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
