import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-25",
	localId: 25,

	// Card informations
	name: {
		en: "Tirtouga",
		fr: "Carapagos",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 564,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/25/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/25/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/25/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/25/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.RESTORED,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Surf",
			fr: "Surf",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card

