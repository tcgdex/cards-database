import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-30",
	localId: 30,

	// Card informations
	name: {
		en: "Electrike",
	},

	hp: 50,

	type: [
		Type.LIGHTNING,
	],

	dexId: 309,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/30/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Charge",
		},
		text: {
			en: "Attach a Lightning Energy from your discard pile to Electrike.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Thunder Jolt",
		},
		text: {
			en: "Flip a coin. If tails, Electrike does 10 damage to itself.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
