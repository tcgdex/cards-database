import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-7",
	localId: 7,

	// Card informations
	name: {
		en: "Dwebble",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 557,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/7/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Beat",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cut",
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
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
