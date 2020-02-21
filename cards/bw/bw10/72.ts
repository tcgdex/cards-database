import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-72",
	localId: 72,

	// Card informations
	name: {
		en: "Porygon",
		fr: "Porygon",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 137,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/72/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/72/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
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
	}],

	weaknesses: [{
		type: Type.FIGHTING,
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
