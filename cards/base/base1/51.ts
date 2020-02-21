import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base1-51",
	localId: 51,

	// Card informations
	name: {
		en: "Koffing",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 109,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base1/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base1/51/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Foul Gas",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned; if tails, it is now Confused.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Base",
		code: "base1"
	}
}

export default card
