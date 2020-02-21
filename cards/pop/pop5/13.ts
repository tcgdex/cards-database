import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop5-13",
	localId: 13,

	// Card informations
	name: {
		en: "Pikachu (Delta Species)",
	},

	hp: 40,

	type: [
		Type.METAL,
	],

	dexId: 25,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop5/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop5/13/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Electric Punch",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Metal",
		},
		text: {
			en: "Flip a coin for each Energy attached to Pikachu. This attack does 10 damage plus 20 more damage for each heads.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "POP Series 5",
		code: "pop5"
	}
}

export default card
