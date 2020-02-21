import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-101",
	localId: 101,

	// Card informations
	name: {
		en: "White Kyurem-EX",
	},

	hp: 180,

	type: [
		Type.DRAGON,
	],

	dexId: 646,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/101/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Stream",
		},
		text: {
			en: "Flip a coin. If heads, attach a basic Energy card from your discard pile to this Pokémon.",
		},
		damage: 60
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ice Burn",
		},
		text: {
			en: "Discard 2 Fire Energy attached to this Pokémon. The Defending Pokémon is now Burned.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
