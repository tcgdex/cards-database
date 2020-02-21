import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-1",
	localId: 1,

	// Card informations
	name: {
		en: "Aggron",
	},

	hp: 110,

	type: [
		Type.METAL,
	],

	dexId: 306,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/1/high",
		},
	},

	evolveFrom: {
		en: "Lairon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Retaliate",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage times the number of damage counters on Aggron.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mega Punch",
		},
		damage: 40
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Lariat",
		},
		text: {
			en: "Flip 2 coins. This attack does 70 damage times the number of heads.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
