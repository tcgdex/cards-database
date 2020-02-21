import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-18",
	localId: 18,

	// Card informations
	name: {
		en: "Litwick",
		fr: "Funécire",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 607,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/18/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/18/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/18/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Flare",
			fr: "Flamboiement",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
