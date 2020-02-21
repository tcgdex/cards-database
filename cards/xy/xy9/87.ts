import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-87",
	localId: 87,

	// Card informations
	name: {
		en: "Rattata",
		fr: "Rattata",
	},

	hp: 30,

	type: [
		Type.COLORLESS,
	],

	dexId: 19,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/87/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/87/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dangerous Suspicion",
			fr: "Soupçon Dangereux",
		},
		text: {
			en: "Draw a card. Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Piochez une carte. Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
