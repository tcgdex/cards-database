import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-60",
	localId: 60,

	// Card informations
	name: {
		en: "Golbat",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 42,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/60/high",
		},
	},

	evolveFrom: {
		en: "Zubat",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Sound Wave",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, the Defending Pokémon is now Poisoned.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Strength in Numbers",
		},
		text: {
			en: "This attack does 30 damage plus 10 more damage for each Zubat, Golbat, and Crobat on your bench.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
