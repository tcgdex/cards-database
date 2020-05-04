import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-38",
	localId: 38,

	// Card informations
	name: {
		en: "Team Magma's Rhyhorn",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 111,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/38/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mt. TBT",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Damage",
		},
		text: {
			en: "Does 10 damage to each Defending Pokémon.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Rush",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
