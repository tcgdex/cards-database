import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sma/SV23/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV23/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV23/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
