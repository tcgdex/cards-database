import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-239",
	localId: 239,

	// Card informations
	name: {
		en: "Slowpoke & Psyduck-GX",
	},

	hp: 250,

	type: [
		Type.WATER,
	],

	dexId: 54,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/239/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/239/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],





	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Ditch and Splash",
		},
		text: {
			en: "Discard any number of Supporter cards from your hand. This attack does 40 damage for each card you discarded in this way.",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Thrilling Times GX",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 100 more damage. If this Pokémon has at least 6 extra {W} Energy attached to it (in addition to this attack's cost), flip 10 coins instead, and this attack does 100 more damage for each heads. (You can't use more than 1 GX attack in a game.)",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
