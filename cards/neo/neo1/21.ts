import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-21",
	localId: 21,

	// Card informations
	name: {
		en: "Donphan",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 232,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/21/high",
		},
	},

	evolveFrom: {
		en: "Phanpy",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Flail",
		},
		text: {
			en: "Does 10 damage times the number of damage counters on Donphan.",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Rapid Spin",
		},
		text: {
			en: "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with his or her Active Pokémon, then, if you have any Benched Pokémon, you switch 1 of them with your Active Pokémon. (Do the damage before switching the Pokémon.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
