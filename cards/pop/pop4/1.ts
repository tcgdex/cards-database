import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop4-1",
	localId: 1,

	// Card informations
	name: {
		en: "Chimecho (Delta Species)",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 358,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop4/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop4/1/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Wrap",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Sonicboom",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness or Resistance.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "POP Series 4",
		code: "pop4"
	}
}

export default card
