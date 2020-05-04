import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-24",
	localId: 24,

	// Card informations
	name: {
		en: "Pelipper",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 279,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/24/high",
		},
	},

	evolveFrom: {
		en: "Wingull",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Pulse",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Continuous Crush",
		},
		text: {
			en: "Flip a coin until you get tails. For each heads, discard an Energy card attached to the Defending Pokémon.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
