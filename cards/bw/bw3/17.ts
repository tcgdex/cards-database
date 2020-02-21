import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-17",
	localId: 17,

	// Card informations
	name: {
		en: "Simisear",
		fr: "Flamoutan",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 514,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/17/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/17/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/17/high",
		},
	},

	evolveFrom: {
		en: "Pansear",
		fr: "Flamajou",
	},

	tags: [
		Tag.STAGE1,
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
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Double Fire",
			fr: "Double Feu",
		},
		text: {
			en: "Flip 2 coins. This attack does 80 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
