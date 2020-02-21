import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-44",
	localId: 44,

	// Card informations
	name: {
		en: "Kyurem-EX",
	},

	hp: 180,

	type: [
		Type.WATER,
	],

	dexId: 646,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/44/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Frozen Wings",
		},
		text: {
			en: "Discard a Special Energy attached to the Defending Pokémon.",
		},
		damage: 60
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hail Blizzard",
		},
		text: {
			en: "This Pokémon can't use Hail Blizzard during your next turn.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.METAL,
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
