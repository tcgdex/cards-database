import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-131",
	localId: 131,

	// Card informations
	name: {
		en: "Sneasel",
		fr: "Farfuret",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 215,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/131/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/131/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/131/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/131/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
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
