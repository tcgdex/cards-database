import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-4",
	localId: 4,

	// Card informations
	name: {
		en: "Dusclops",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 356,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/4/high",
		},
	},

	evolveFrom: {
		en: "Duskull",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Judgement",
		},
		text: {
			en: "Flip 2 coins. If both of them are heads, the Defending Pokémon is Knocked Out.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Random Curse",
		},
		text: {
			en: "Put a total of 5 damage counters on all Defending Pokémon in any way you like.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
