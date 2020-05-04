import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-9",
	localId: 9,

	// Card informations
	name: {
		en: "Venonat",
		fr: "Mimitoss",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 48,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/9/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/9/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/9/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Radar Eyes",
			fr: "Regard Radar",
		},
		text: {
			en: "Look at the top 7 cards of your deck and put 1 of them into your hand. Shuffle the other cards back into your deck.",
			fr: "Regardez les 7 cartes du dessus de votre deck, puis ajoutez l’une d’entre elles à votre main. Mélangez les autres cartes avec votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flop",
			fr: "Flop",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
