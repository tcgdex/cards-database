import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-84",
	localId: 84,

	// Card informations
	name: {
		en: "Corsola",
		fr: "Corayon",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 222,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/84/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/84/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/84/high",
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
			en: "Rally",
			fr: "Regroupement",
		},
		text: {
			en: "Search your deck for up to 3 different types of Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck jusqu'à 3 types de Pokémon de base différents et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hook",
			fr: "Crochet",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
