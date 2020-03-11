import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-38",
	localId: 38,

	// Card informations
	name: {
		en: "Dark Magcargo",
	},

	hp: 80,

	type: [
		Type.FIRE,
		Type.DARKNESS,
	],

	dexId: 219,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/38/high",
		},
	},

	evolveFrom: {
		en: "Slugma",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Nakaoka",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Press",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each basic Energy card attached to all of your Active Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Linear Attack",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
