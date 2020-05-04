import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-11",
	localId: 11,

	// Card informations
	name: {
		en: "Seviper",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 336,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/11/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Deadly Poison",
		},
		text: {
			en: "You may discard a Grass Energy card attached to Seviper. If you do, the Defending Pokémon is now Poisoned.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Extra Poison",
		},
		text: {
			en: "If the Defending Pokémon is Pokémon-ex, the Defending Pokémon is now Asleep and Poisoned.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
