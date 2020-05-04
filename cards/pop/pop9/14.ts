import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop9-14",
	localId: 14,

	// Card informations
	name: {
		en: "Gible",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 443,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop9/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop9/14/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hiroki Fuchino",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Push Down",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "+10"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "POP Series 9",
		code: "pop9"
	}
}

export default card
