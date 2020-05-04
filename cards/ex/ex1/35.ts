import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-35",
	localId: 35,

	// Card informations
	name: {
		en: "Kirlia",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 281,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/35/high",
		},
	},

	evolveFrom: {
		en: "Ralts",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dazzle Dance",
		},
		text: {
			en: "Flip a coin. If heads, each Defending Pokémon is now Confused.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Life Drain",
		},
		text: {
			en: "Flip a coin. If heads, put damage counters on the Defending Pokémon until it is 10 HP away from being Knocked Out.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
