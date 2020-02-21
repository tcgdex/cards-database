import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-32",
	localId: 32,

	// Card informations
	name: {
		en: "Buizel",
		fr: "Mustébouée",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 418,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/32/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/32/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/32/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
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
