import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dv1-6",
	localId: 6,

	// Card informations
	name: {
		en: "Bagon",
		fr: "Draby",
	},

	hp: 50,

	type: [
		Type.DRAGON,
	],

	dexId: 371,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/dv1/6/low",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/dv1/6/high",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/6/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.WATER
		],
		name: {
			en: "Dragon Claw",
			fr: "Dracogriffe",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Dragon Vault",
		code: "dv1"
	}
}

export default card
