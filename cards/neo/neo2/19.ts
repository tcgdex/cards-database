import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-19",
	localId: 19,

	// Card informations
	name: {
		en: "Butterfree",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 12,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/19/high",
		},
	},

	evolveFrom: {
		en: "Metapod",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Magic Dust",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now either Asleep, Confused, Paralyzed, or Poisoned (your choice).",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Reverse",
		},
		text: {
			en: "Does 10 damage times the number of Energy cards attached to the Defending Pokémon. After doing damage, remove a number of damage counters from Butterfree equal to the amount of damage done to the Defending Pokémon (after applying Weakness and Resistance).",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
