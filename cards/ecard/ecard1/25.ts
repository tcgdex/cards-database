import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-25",
	localId: 25,

	// Card informations
	name: {
		en: "Raichu",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 26,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/25/high",
		},
	},

	evolveFrom: {
		en: "Pikachu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Plasma",
		},
		text: {
			en: "If there are any Energy cards in your discard pile, flip a coin. If heads, attach one of them to Raichu.",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Shock Bolt",
		},
		text: {
			en: "Discard all L Energy cards attached to Raichu or this attack does nothing.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
