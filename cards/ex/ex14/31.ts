import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-31",
	localId: 31,

	// Card informations
	name: {
		en: "Combusken",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 256,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/31/high",
		},
	},

	evolveFrom: {
		en: "Torchic",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 12,
		name: "Sachiko Adachi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Searing Flame",
		},
		text: {
			en: "The Defending Pokémon is now Burned.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Firebreathing",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage.",
		},
		damage: 30
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
