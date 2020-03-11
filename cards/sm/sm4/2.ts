import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-2",
	localId: 2,

	// Card informations
	name: {
		en: "Kakuna",
		fr: "Coconfort",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 14,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/2/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/2/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/2/high",
		},
	},

	evolveFrom: {
		en: "Weedle",
		fr: "Aspicot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "miki kudo",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Multiply",
			fr: "Multiplication",
		},
		text: {
			en: "Search your deck for up to 3 Kakuna and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 3 Coconfort dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
