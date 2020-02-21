import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-55",
	localId: 55,

	// Card informations
	name: {
		en: "Yamask",
		fr: "Tutafeh",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 562,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/55/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/55/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/55/high",
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
			en: "Will-O-Wisp",
			fr: "Feu Follet",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
