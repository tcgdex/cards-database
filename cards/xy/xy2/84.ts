import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-84",
	localId: 84,

	// Card informations
	name: {
		en: "Buneary",
		fr: "Laporeille",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 427,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/84/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/84/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/84/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kyoko Umemoto",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bounce",
			fr: "Rebond",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
