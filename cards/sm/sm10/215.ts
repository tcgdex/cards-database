import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-215",
	localId: 215,

	// Card informations
	name: {
		en: "Pheromosa & Buzzwole-GX",
	},

	hp: 260,

	type: [
		Type.GRASS,
	],

	dexId: 794,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/215/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/215/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Jet Punch",
		},
		text: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Elegant Sole",
		},
		text: {
			en: "During your next turn, this Pokémon's Elegant Sole attack's base damage is 60.",
		},
		damage: 190
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Beast Game-GX",
		},
		text: {
			en: "If your opponent's Pokémon is Knocked Out by damage from this attack, take 1 more Prize card. If this Pokémon has at least 7 extra Energy attached to it (in addition to this attack's cost), take 3 more Prize cards instead. (You can't use more than 1 GX attack in a game.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
