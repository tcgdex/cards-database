import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-22",
	localId: 22,

	// Card informations
	name: {
		en: "Latios δ",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 381,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/22/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Wave",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Dragonbreath",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
