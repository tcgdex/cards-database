import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-14",
	localId: 14,

	// Card informations
	name: {
		en: "Team Aqua's Crawdaunt",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 342,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/14/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 16,
		name: "Nakaoka"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Poison Reaction",
		},
		text: {
			en: "If the Defending Pokémon is Poisoned, this attack does 20 damage plus 20 more damage.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Claw",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads.",
		},
		damage: 30
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
