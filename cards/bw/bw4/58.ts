import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-58",
	localId: 58,

	// Card informations
	name: {
		en: "Munna",
		fr: "Munna",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 517,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/58/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/58/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/58/high",
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
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
