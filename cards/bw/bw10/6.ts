import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-6",
	localId: 6,

	// Card informations
	name: {
		en: "Karrablast",
		fr: "Carabing",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 588,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/6/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/6/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/6/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Peck",
			fr: "Picpic",
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
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
