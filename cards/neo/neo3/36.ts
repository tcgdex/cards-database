import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-36",
	localId: 36,

	// Card informations
	name: {
		en: "Piloswine",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 221,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/36/high",
		},
	},

	evolveFrom: {
		en: "Swinub",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Nap",
		},
		text: {
			en: "Remove 3 damage counters from Piloswine. If it has fewer damage counters than that, remove all of them.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "High-Speed Charge",
		},
		text: {
			en: "Piloswine does 30 damage to itself. Piloswine can't use this attack during your next turn.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-30"
	}],



	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
