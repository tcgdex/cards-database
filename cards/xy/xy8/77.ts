import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-77",
	localId: 77,

	// Card informations
	name: {
		en: "Cubone",
		fr: "Osselait",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 104,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/77/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/77/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/77/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Whimsy Tackle",
			fr: "Charge Bizarre",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
