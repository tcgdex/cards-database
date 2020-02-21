import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-29",
	localId: 29,

	// Card informations
	name: {
		en: "Scizor",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 212,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/29/high",
		},
	},

	evolveFrom: {
		en: "Scyther",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 120,
		name: "Kimiya Masago"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "False Swipe",
		},
		text: {
			en: "Does damage equal to half the Defending Pokémon's remaining HP (rounded down to the nearest 10).",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Claw",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 times the number of heads.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
