import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-42",
	localId: 42,

	// Card informations
	name: {
		en: "Vibrava δ",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 329,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/42/high",
		},
	},

	evolveFrom: {
		en: "Trapinch",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bite",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Sonic Noise",
		},
		text: {
			en: "If the Defending Pokémon is Pokémon-ex, that Pokémon is now Confused.",
		},
		damage: 30
	}],







	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
