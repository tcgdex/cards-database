import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-62",
	localId: 62,

	// Card informations
	name: {
		en: "Electrike",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 309,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/62/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Zap Kick",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Thunder Jolt",
		},
		text: {
			en: "Flip a coin. If tails, Electrike does 10 damage to itself.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
