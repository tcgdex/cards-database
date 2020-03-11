import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-86",
	localId: 86,

	// Card informations
	name: {
		en: "Minccino",
		fr: "Chinchidou",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 572,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/86/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/86/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/86/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Cleaning Up",
			fr: "Nettoyage",
		},
		text: {
			en: "Discard a Pokémon Tool card attached to 1 of your opponent's Pokémon.",
			fr: "Défaussez une carte Outil Pokémon attachée à l'un des Pokémon de votre adversaire.",
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
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
