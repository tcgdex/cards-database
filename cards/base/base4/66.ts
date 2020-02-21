import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base4-66",
	localId: 66,

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
			en: "https://assets.tcgdex.net/en/base/base4/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base4/66/high",
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
		name: "Base Set 2",
		code: "base4"
	}
}

export default card
