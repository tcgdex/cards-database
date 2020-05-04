import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-70",
	localId: 70,

	// Card informations
	name: {
		en: "Omanyte",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 138,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/70/high",
		},
	},

	evolveFrom: {
		en: "Helix Fossil",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Aya Kusube",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Collect",
		},
		text: {
			en: "Draw 3 cards.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tickle",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+20"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
