import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-52",
	localId: 52,

	// Card informations
	name: {
		en: "Magmar",
		fr: "Magmar",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 126,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/52/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/52/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/52/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Live Coal",
			fr: "Charbon mutant",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Magma Punch",
			fr: "Poing magma",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
