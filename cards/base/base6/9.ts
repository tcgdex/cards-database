import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base6-9",
	localId: 9,

	// Card informations
	name: {
		en: "Dark Vaporeon",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 134,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base6/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/9/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Whirlpool",
		},
		text: {
			en: "If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card
