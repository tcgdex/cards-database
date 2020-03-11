import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-18",
	localId: 18,

	// Card informations
	name: {
		en: "Charmander",
		fr: "Salamèche",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 4,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/18/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/18/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/18/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Draw In",
			fr: "Aspiracartes",
		},
		text: {
			en: "Attach 2 Fire Energy cards from your discard pile to this Pokémon.",
			fr: "Attachez 2 cartes Énergie Fire de votre pile de défausse à ce Pokémon.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flare",
			fr: "Flamboiement",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
