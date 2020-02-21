import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-71",
	localId: 71,

	// Card informations
	name: {
		en: "Lapras",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 131,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/71/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Assist",
		},
		text: {
			en: "Search your deck for a Supporter card, show it to your opponent and put it into your hand. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hypnoblast",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
