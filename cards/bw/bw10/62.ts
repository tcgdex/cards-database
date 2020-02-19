import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/bw/bw10/62/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/62/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/62/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/62/high.png",
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

