import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-39",
	localId: 39,

	// Card informations
	name: {
		en: "Tynamo",
		fr: "Anchwatt",
	},

	hp: 30,

	type: [
		Type.LIGHTNING,
	],

	dexId: 602,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/39/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/39/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/39/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
