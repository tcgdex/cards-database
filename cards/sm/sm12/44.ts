import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-44",
	localId: 44,

	// Card informations
	name: {
		en: "Weavile",
		fr: "Dimoret",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 461,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/44/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/44/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/44/high",
		},
	},

	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "MAHOU",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Nasty Plot",
			fr: "Machination",
		},
		text: {
			en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 2 cartes dans votre deck, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Slashing Claw",
			fr: "Griffe Taillante",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
