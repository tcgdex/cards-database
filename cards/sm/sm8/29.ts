import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-29",
	localId: 29,

	// Card informations
	name: {
		en: "Nincada",
		fr: "Ningale",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 290,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/29/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/29/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/29/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 102,
		name: "SATOSHI NAKAI"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fury Swipes",
			fr: "Combo-Griffe",
		},
		text: {
			en: "Flip 3 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
		},
		damage: 10
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
