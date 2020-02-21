import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-77",
	localId: 77,

	// Card informations
	name: {
		en: "Tentacool",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 72,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/77/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 55,
		name: "Hisao Nakamura"
	},

	abilities: [{
		id: 466,
		type: AbilityType.POKEBODY,
		name: {
			en: "Freefloating",
		},
		text: {
			en: "If Tentacool has no Energy attached to it, Tentacool's Retreat Cost is 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Wrap",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
