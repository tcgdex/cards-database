import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-55",
	localId: 55,

	// Card informations
	name: {
		en: "Elgyem",
		fr: "Lewsor",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 605,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/55/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/55/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "First Contact",
			fr: "Premier Contact",
		},
		text: {
			en: "Search your deck for 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
			fr: "Cherchez 2 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
