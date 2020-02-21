import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-55",
	localId: 55,

	// Card informations
	name: {
		en: "Chinchou",
	},

	hp: 50,

	type: [
		Type.LIGHTNING,
	],

	dexId: 170,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Supersonic",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Flail",
		},
		text: {
			en: "Does 10 damage times the number of damage counters on Chinchou.",
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
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
