import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-75",
	localId: 75,

	// Card informations
	name: {
		en: "Erika's Bellsprout",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 69,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/75/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Poison Vine",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Vine Whip",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
