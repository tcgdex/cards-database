import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-25",
	localId: 25,

	// Card informations
	name: {
		en: "Silcoon",
		fr: "Armulys",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 266,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/25/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/25/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/25/high",
		},
	},

	evolveFrom: {
		en: "Wurmple",
		fr: "Chenipotte",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Satoshi Shirai",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Cocoon Collector",
			fr: "Collectionneur de Cocons",
		},
		text: {
			en: "Search your deck for up to 4 in any combination of Silcoon and Cascoon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez une combinaison d’un maximum de 4 Armulys et Blindalys dans votre deck, et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
