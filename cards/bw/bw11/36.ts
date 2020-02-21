import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-36",
	localId: 36,

	// Card informations
	name: {
		en: "Phione",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 489,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/36/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pull Out",
		},
		text: {
			en: "Put a card from your discard pile on top of your deck.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Aqua Boomerang",
		},
		text: {
			en: "Return this Pokémon and all cards attached to it to your hand.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
