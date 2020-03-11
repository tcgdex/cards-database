import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-16",
	localId: 16,

	// Card informations
	name: {
		en: "Team Aqua's Sealeo",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 364,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "T. Honda",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Aqua Trance",
		},
		text: {
			en: "At the end of your opponent's next turn, the Defending Pokémon is now Asleep.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Super Hypnoblast",
		},
		text: {
			en: "If the Defending Pokémon is Asleep, this attack does 30 damage plus 20 more damage.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
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
