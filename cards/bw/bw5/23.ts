import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-23",
	localId: 23,

	// Card informations
	name: {
		en: "Slowpoke",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 79,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/23/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 46,
		name: "MAHOU"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Big Yawn",
		},
		text: {
			en: "Both this Pokémon and the Defending Pokémon are now Asleep.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Shot in the Dark",
		},
		text: {
			en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
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
