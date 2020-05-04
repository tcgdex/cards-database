import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop5-2",
	localId: 2,

	// Card informations
	name: {
		en: "Lugia",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 249,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop5/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop5/2/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Super Psy Bolt",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aerowing",
		},
		text: {
			en: "Before doing damage, you may flip a coin. If tails, this attack does nothing. If heads, this attack does 60 damage instead.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "POP Series 5",
		code: "pop5"
	}
}

export default card
