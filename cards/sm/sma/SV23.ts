import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV23",
	localId: "SV23",

	// Card informations
	name: {
		en: "Rockruff",
		fr: "Rocabot",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 744,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV23/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV23/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV23/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV23/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card

