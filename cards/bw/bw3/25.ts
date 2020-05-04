import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/bw/bw3/25/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/25/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.RESTORED,
	],

	illustrator: "Naoyo Kimura",



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

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
