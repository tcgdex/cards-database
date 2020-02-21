import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop5-5",
	localId: 5,

	// Card informations
	name: {
		en: "Charmeleon (Delta Species)",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 5,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop5/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop5/5/high",
		},
	},

	evolveFrom: {
		en: "Charmander",
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
			Type.COLORLESS
		],
		name: {
			en: "Slash",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thunder Jolt",
		},
		text: {
			en: "Flip a coin. If tails, Charmeleon does 10 damage to itself.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "POP Series 5",
		code: "pop5"
	}
}

export default card
