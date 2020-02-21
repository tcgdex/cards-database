import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base4-85",
	localId: 85,

	// Card informations
	name: {
		en: "Paras",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 46,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base4/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base4/85/high",
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
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Spore",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
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
