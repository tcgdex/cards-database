import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-27",
	localId: 27,

	// Card informations
	name: {
		en: "Team Aqua's Electrike",
	},

	hp: 50,

	type: [
		Type.LIGHTNING,
	],

	dexId: 309,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "M. Akiyama",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Random Spark",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Plasma",
		},
		text: {
			en: "Flip a coin. If heads, search your discard pile for a Lightning Energy card and attach it to Team Aqua's Electrike.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
