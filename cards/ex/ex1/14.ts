import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-14",
	localId: 14,

	// Card informations
	name: {
		en: "Wailord",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 321,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/14/high",
		},
	},

	evolveFrom: {
		en: "Wailmer",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
		},
		text: {
			en: "Wailord does 20 damage to itself.",
		},
		damage: 50
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Surf",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
