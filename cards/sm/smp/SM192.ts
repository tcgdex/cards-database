import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM192",
	localId: "SM192",

	// Card informations
	name: {
		en: "Lucario & Melmetal-GX",
	},

	hp: 260,

	type: [
		Type.METAL,
	],

	dexId: 448,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM192/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM192/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: "nagimiso",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Steel Fist",
		},
		text: {
			en: "Search your deck for a Metal Energy card and attach it to this Pokémon. Then, shuffle your deck.",
		},
		damage: 50
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Impact",
		},
		damage: 150
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Full Metal Wall-GX",
		},
		text: {
			en: "For the rest of this game, your Metal Pokémon take 30 less damage from your opponent's attacks (after applying Weakness and Resistance). If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack's cost), discard all Energy from your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
