import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-80",
	localId: 80,

	// Card informations
	name: {
		en: "Drifloon",
		fr: "Baudrive",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 425,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/80/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/80/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 98,
		name: "ryoma uratsuka"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
