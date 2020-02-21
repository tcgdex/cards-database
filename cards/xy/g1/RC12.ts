import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC12",
	localId: "RC12",

	// Card informations
	name: {
		en: "Gulpin",
		fr: "Gloupti",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 316,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC12/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC12/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Starvin'",
			fr: "Affamé",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
