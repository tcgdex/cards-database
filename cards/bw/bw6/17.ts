import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-17",
	localId: 17,

	// Card informations
	name: {
		en: "Foongus",
		fr: "Trompignon",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 590,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/17/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/17/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/17/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/17/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Spin",
			fr: "Double Tour",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card

