import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop1-3",
	localId: 3,

	// Card informations
	name: {
		en: "Rayquaza",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop1/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop1/3/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Katsura Tabata",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fly",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of an attack, including damage, done to Rayquaza during your opponent's next turn.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.LIGHTNING
		],
		name: {
			en: "Dragon Claw",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "POP Series 1",
		code: "pop1"
	}
}

export default card
