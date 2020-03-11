import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-44",
	localId: 44,

	// Card informations
	name: {
		en: "Espurr",
		fr: "Psystigri",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 677,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/44/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/44/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/44/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "0313",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Energy Teaser",
			fr: "Énergie Provocante",
		},
		text: {
			en: "Move an Energy from 1 of your opponent's Benched Pokémon to another of their Pokémon.",
			fr: "Déplacez une Énergie de l’un des Pokémon de Banc de votre adversaire vers un autre de ses Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
