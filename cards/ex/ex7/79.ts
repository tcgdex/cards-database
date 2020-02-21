import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-79",
	localId: 79,

	// Card informations
	name: {
		en: "Swinub",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 220,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/79/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rest",
		},
		text: {
			en: "Remove all Special Conditions and all damage counters from Swinub. Swinub is now Asleep.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
