import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-92",
	localId: 92,

	// Card informations
	name: {
		en: "Zoroark BREAK",
		fr: "Zoroark TURBO",
	},

	hp: 140,

	type: [
		Type.DARKNESS,
	],

	dexId: 571,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/92/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/92/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/92/high",
		},
	},

	evolveFrom: {
		en: "Zoroark",
		fr: "Zoroark",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Foul Play",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
		},
	},{
		cost: [
			Type.DARKNESS
		],
		name: {
			fr: "Tricherie",
		},
		text: {
			fr: "Choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
