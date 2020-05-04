import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-39",
	localId: 39,

	// Card informations
	name: {
		en: "Dark Quilava",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 156,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/39/high",
		},
	},

	evolveFrom: {
		en: "Cyndaquil",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Incinerate",
		},
		text: {
			en: "Show the top card of your opponent's deck to all players. If it's a Trainer card, discard it.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Rushing Magma",
		},
		text: {
			en: "Discard the top 5 cards of your deck. (If there are fewer than 5 cards in your deck, discard all of them.) This attack does 20 damage for each Energy card you discarded in this way.",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
