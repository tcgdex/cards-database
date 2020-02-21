import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-21",
	localId: 21,

	// Card informations
	name: {
		en: "Chimchar",
		fr: "Ouisticram",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 390,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/21/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/21/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/21/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
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
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
