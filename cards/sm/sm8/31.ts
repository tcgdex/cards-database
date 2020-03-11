import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-31",
	localId: 31,

	// Card informations
	name: {
		en: "Combee",
		fr: "Apitrini",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 415,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/31/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/31/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/31/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Bee March",
			fr: "Marche Apicole",
		},
		text: {
			en: "Search your deck for up to 3 Combee and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 3 Apitrini dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
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
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
