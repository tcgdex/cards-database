import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-39",
	localId: 39,

	// Card informations
	name: {
		en: "Froakie",
		fr: "Grenousse",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 656,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/39/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/39/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/39/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Bounce",
			fr: "Rebond",
		},
		text: {
			en: "Flip a coin. If heads, switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Lancez une pièce. Si c'est face, échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
