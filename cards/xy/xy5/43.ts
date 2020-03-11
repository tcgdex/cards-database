import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-43",
	localId: 43,

	// Card informations
	name: {
		en: "Feebas",
		fr: "Barpau",
	},

	hp: 30,

	type: [
		Type.WATER,
	],

	dexId: 349,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/43/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/43/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/43/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Float On",
			fr: "Flottaison",
		},
		text: {
			en: "Flip a coin. If tails, this Pokémon does 10 damage to itself.",
			fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 10 dégâts.",
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
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
