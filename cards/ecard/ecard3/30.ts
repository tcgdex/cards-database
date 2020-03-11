import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-30",
	localId: 30,

	// Card informations
	name: {
		en: "Starmie",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 121,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/30/high",
		},
	},

	evolveFrom: {
		en: "Staryu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "CR CG gangs",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Energy Burst",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage times the number of Energy cards attached to Starmie and the Defending Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Star Back",
		},
		text: {
			en: "Attach a basic Energy card from your discard pile to 1 of your Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
