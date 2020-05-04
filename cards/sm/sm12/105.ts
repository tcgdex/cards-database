import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-105",
	localId: 105,

	// Card informations
	name: {
		en: "Onix",
		fr: "Onix",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 95,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/105/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/105/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/105/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "otumami",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dig Deep",
			fr: "Trou Profond",
		},
		text: {
			en: "Put an Energy card from your discard pile into your hand.",
			fr: "Ajoutez une carte Énergie de votre pile de défausse à votre main.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Smash",
			fr: "Éclate-Queue",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
