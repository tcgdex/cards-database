import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-42",
	localId: 42,

	// Card informations
	name: {
		en: "Metapod",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 11,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/42/high",
		},
	},

	evolveFrom: {
		en: "Caterpie",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Harden",
		},
		text: {
			en: "During your opponent's next turn, whenever 20 or less damage is done to Metapod (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Hatch",
		},
		text: {
			en: "Flip a coin. If heads, remove all damage counters from Metapod. Then, search your deck for a card that evolves from Metapod and attach that card to Metapod. This counts as evolving Metapod. Shuffle your deck afterward.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
