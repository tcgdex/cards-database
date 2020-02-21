import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-37",
	localId: 37,

	// Card informations
	name: {
		en: "Corsola",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 222,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/37/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Recover",
		},
		text: {
			en: "Discard 1 Energy attached to Corsola or this attack does nothing. Remove all damage counters from Corsola.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Spike Cannon",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 times the number of heads.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
