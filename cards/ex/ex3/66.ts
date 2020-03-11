import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-66",
	localId: 66,

	// Card informations
	name: {
		en: "Nincada",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 290,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Toshinao Aoki",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Poison Breath",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
