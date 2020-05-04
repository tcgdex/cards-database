import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-25",
	localId: 25,

	// Card informations
	name: {
		en: "Starmie",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 121,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/25/high",
		},
	},

	evolveFrom: {
		en: "Staryu",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Confuse Ray",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Core Stream",
		},
		text: {
			en: "Choose an Energy type other than . This attack does 20 damage to each of your opponent's Pokémon with any Energy cards of that type attached to it. Don't apply Weakness and Resistance.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
