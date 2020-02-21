import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-29",
	localId: 29,

	// Card informations
	name: {
		en: "Bayleef",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 153,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/29/high",
		},
	},

	evolveFrom: {
		en: "Chikorita",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sweet Scent",
		},
		text: {
			en: "Flip a coin. If heads and if any of your Pokémon have any damage counters on them, then remove 2 damage counters from 1 of them (or 1 if it only has 1). If tails and if any of your opponent's Pokémon have any damage counters on them, choose 1 of them and remove 2 damage counters from it (or 1 if it only has 1).",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Double Razor Leaf",
		},
		text: {
			en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
