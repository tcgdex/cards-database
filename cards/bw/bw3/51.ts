import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-51",
	localId: 51,

	// Card informations
	name: {
		en: "Duosion",
		fr: "Méios",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 578,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/51/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/51/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/51/high",
		},
	},

	evolveFrom: {
		en: "Solosis",
		fr: "Nucléos",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
