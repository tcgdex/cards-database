import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-52",
	localId: 52,

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
			en: "https://assets.tcgdex.net/en/ex/ex1/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/52/high",
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
			Type.COLORLESS
		],
		name: {
			en: "Headbutt",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
