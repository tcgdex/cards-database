import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-5",
	localId: 5,

	// Card informations
	name: {
		en: "Spinarak",
		fr: "Mimigal",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 167,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/5/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/5/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/5/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "String Shot",
			fr: "Sécrétion",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
