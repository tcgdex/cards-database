import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-11",
	localId: 11,

	// Card informations
	name: {
		en: "Team Magma's Rhydon",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
		Type.DARKNESS,
	],

	dexId: 112,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/11/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "T. Honda",



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Magma Jab",
		},
		text: {
			en: "This attack's damage is not affected by Resistance.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Shoot Down",
		},
		text: {
			en: "If the Defending Pokémon has Team Aqua in its name, the Defending Pokémon is now Confused.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
