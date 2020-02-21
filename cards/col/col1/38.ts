import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-38",
	localId: 38,

	// Card informations
	name: {
		en: "Weezing",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 110,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/38/high",
		},
	},

	evolveFrom: {
		en: "Koffing",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Super Poison Breath",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Super Explosion",
		},
		text: {
			en: "Weezing does 90 damage to itself, and don't apply Weakness to this damage.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
