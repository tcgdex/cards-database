import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-14",
	localId: 14,

	// Card informations
	name: {
		en: "Groudon",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 383,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/14/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Eruption",
		},
		text: {
			en: "Each player discards the top card of his or her deck. This attack does 40 damage plus 20 more damage for each Energy card discarded in this way.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
