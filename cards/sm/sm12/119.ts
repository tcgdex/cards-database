import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-119",
	localId: 119,

	// Card informations
	name: {
		en: "Pancham",
		fr: "Pandespiègle",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 674,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/119/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/119/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/119/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/119/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 114,
		name: "Motofumi Fujiwara"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Punch",
			fr: "Koud’Poing",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
