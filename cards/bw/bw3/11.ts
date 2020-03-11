import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-11",
	localId: 11,

	// Card informations
	name: {
		en: "Shelmet",
		fr: "Escargaume",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 616,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/11/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/11/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/11/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mysterious Evolution",
			fr: "Évolution Mystérieuse",
		},
		text: {
			en: "If Karrablast is in play, search your deck for a card that evolves from this Pokémon and put it onto this Pokémon. (This counts as evolving this Pokémon.) Shuffle your deck afterward.",
			fr: "Si Carabing est en jeu, cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon. (Cela équivaut à faire évoluer ce Pokémon.) Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
