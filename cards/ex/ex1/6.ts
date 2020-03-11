import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-6",
	localId: 6,

	// Card informations
	name: {
		en: "Dustox",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 269,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/6/high",
		},
	},

	evolveFrom: {
		en: "Cascoon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 225,
		type: AbilityType.POKEBODY,
		name: {
			en: "Protective Dust",
		},
		text: {
			en: "Prevent all effects of attacks, except damage, done to Dustox by the Attacking Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Toxic",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gust",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
