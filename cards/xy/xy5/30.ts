import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-30",
	localId: 30,

	// Card informations
	name: {
		en: "Horsea",
		fr: "Hypotrempe",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 116,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/30/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/30/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/30/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Bubble",
			fr: "Écume",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
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
