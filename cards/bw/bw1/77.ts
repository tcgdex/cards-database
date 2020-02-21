import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-77",
	localId: 77,

	// Card informations
	name: {
		en: "Patrat",
		fr: "Ratentif",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 504,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/77/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/77/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/77/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
