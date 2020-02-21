import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-27",
	localId: 27,

	// Card informations
	name: {
		en: "Flaaffy",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 180,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/27/high",
		},
	},

	evolveFrom: {
		en: "Mareep",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Energy Recall",
		},
		text: {
			en: "Attach up to 2 basic Energy cards from your discard pile to Flaaffy.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Lightning Ball",
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
		name: "Dragon",
		code: "ex3"
	}
}

export default card
