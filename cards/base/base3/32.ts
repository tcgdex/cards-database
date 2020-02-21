import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base3-32",
	localId: 32,

	// Card informations
	name: {
		en: "Cloyster",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 91,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base3/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base3/32/high",
		},
	},

	evolveFrom: {
		en: "Shellder",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Clamp",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, this attack does nothing (not even damage).",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Spike Cannon",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Fossil",
		code: "base3"
	}
}

export default card
