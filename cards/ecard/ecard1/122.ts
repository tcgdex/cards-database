import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-122",
	localId: 122,

	// Card informations
	name: {
		en: "Oddish",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 43,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/122/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/122/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 103,
		name: "Masako Yamashita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Sleep Seed",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
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
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
