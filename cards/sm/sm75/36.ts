import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-36",
	localId: 36,

	// Card informations
	name: {
		en: "Dragonair",
		fr: "Draco",
	},

	hp: 100,

	type: [
		Type.DRAGON,
	],

	dexId: 148,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/36/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/36/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/36/high",
		},
	},

	evolveFrom: {
		en: "Dratini",
		fr: "Minidraco",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Tail",
			fr: "Draco-Queue",
		},
		text: {
			en: "Flip 2 coins. This attack does 60 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 60
	},{
		cost: [
			Type.WATER,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Waterfall",
			fr: "Cascade",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
