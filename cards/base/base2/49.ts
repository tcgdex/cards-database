import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base2-49",
	localId: 49,

	// Card informations
	name: {
		en: "Bellsprout",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 69,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base2/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base2/49/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Vine Whip",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Call for Family",
		},
		text: {
			en: "Search your deck for a Basic Pokémon named Bellsprout and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Jungle",
		code: "base2"
	}
}

export default card
