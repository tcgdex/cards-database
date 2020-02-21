import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-29",
	localId: 29,

	// Card informations
	name: {
		en: "Spheal",
		fr: "Obalie",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 363,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/29/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/29/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/29/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Unstoppable Roll",
			fr: "Roulade Obstinée",
		},
		text: {
			en: "Flip 2 coins. If both of them are heads, this attack does 30 more damage.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
