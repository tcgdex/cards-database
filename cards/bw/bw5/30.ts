import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-30",
	localId: 30,

	// Card informations
	name: {
		en: "Glaceon",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 471,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/30/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Quick Attack",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Reflect Energy",
		},
		text: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
