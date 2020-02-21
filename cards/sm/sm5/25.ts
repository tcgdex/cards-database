import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-25",
	localId: 25,

	// Card informations
	name: {
		en: "Salandit",
		fr: "Tritox",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 757,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/25/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/25/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 66,
		name: "Misa Tsutsui"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Live Coal",
			fr: "Charbon Mutant",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Combustion",
			fr: "Fournaise",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
