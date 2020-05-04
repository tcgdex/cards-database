import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-54",
	localId: 54,

	// Card informations
	name: {
		en: "Yamask",
		fr: "Tutafeh",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 562,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/54/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/54/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/54/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Transfer Pain",
			fr: "Transfert de Douleur",
		},
		text: {
			en: "Move 1 damage counter from any of your Pokémon to any of your opponent's Pokémon.",
			fr: "Déplacez 1 marqueur de dégâts de l'un de vos Pokémon vers l'un des Pokémon de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
