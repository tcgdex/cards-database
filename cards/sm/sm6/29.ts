import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-29",
	localId: 29,

	// Card informations
	name: {
		en: "Bergmite",
		fr: "Grelaçon",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 712,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/29/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/29/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/29/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Break Open",
			fr: "Fracturer",
		},
		text: {
			en: "If your opponent has a Stadium card in play, discard it. If you do, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Si votre adversaire a une carte Stade en jeu, défaussez-la. Dans ce cas, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
