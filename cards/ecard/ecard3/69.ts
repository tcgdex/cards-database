import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-69",
	localId: 69,

	// Card informations
	name: {
		en: "Kadabra",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 64,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/69/high",
		},
	},

	evolveFrom: {
		en: "Abra",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Toshinao Aoki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Nightmare",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mind Shock",
		},
		text: {
			en: "Don't apply Weakness and Resistance.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
