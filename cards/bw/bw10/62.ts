import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-62",
	localId: 62,

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
			en: "https://assets.tcgdex.net/en/bw/bw10/62/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/62/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/62/high",
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
