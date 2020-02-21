import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-7",
	localId: 7,

	// Card informations
	name: {
		en: "Scyther",
		fr: "Insécateur",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 123,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/7/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/7/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/7/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sharp Scythe",
			fr: "Faucille Acérée",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
