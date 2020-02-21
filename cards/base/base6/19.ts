import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base6-19",
	localId: 19,

	// Card informations
	name: {
		en: "Zapdos",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 145,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base6/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/19/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Thunder",
		},
		text: {
			en: "Flip a coin. If tails, Zapdos does 30 damage to itself.",
		},
		damage: 60
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Thunderbolt",
		},
		text: {
			en: "Discard all Energy cards attached to Zapdos in order to use this attack.",
		},
		damage: 100
	}],



	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card
