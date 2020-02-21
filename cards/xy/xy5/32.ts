import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-32",
	localId: 32,

	// Card informations
	name: {
		en: "Staryu",
		fr: "Stari",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 120,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/32/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/32/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/32/high",
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
			Type.COLORLESS
		],
		name: {
			en: "Lunge",
			fr: "Coup Rapide",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
