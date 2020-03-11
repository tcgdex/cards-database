import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-77",
	localId: 77,

	// Card informations
	name: {
		en: "Klinklang",
	},

	hp: 140,

	type: [
		Type.METAL,
	],

	dexId: 601,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/77/high",
		},
	},

	evolveFrom: {
		en: "Klang",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Metal Blast",
		},
		text: {
			en: "Does 20 more damage for each Metal Energy attached to this Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lock Gear",
		},
		text: {
			en: "Draw cards until you have 6 cards in your hand.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
