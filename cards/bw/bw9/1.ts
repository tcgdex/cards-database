import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-1",
	localId: 1,

	// Card informations
	name: {
		en: "Weedle",
		fr: "Aspicot",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 13,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/1/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/1/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/1/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Triple Stab",
			fr: "Aiguillon Triple",
		},
		text: {
			en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
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
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
