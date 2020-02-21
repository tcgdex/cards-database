import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-30",
	localId: 30,

	// Card informations
	name: {
		en: "Charmeleon δ",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 5,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/30/high",
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
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
