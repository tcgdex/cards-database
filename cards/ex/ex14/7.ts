import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-7",
	localId: 7,

	// Card informations
	name: {
		en: "Luvdisc",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 370,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/7/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kyoko Umemoto",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Even Game",
		},
		text: {
			en: "Count the number of your opponent's Pokémon. Search your deck for up to that number of Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Stadium Play",
		},
		text: {
			en: "If you have a Stadium card in play, remove 1 damage counter from each of your Pokémon. If your opponent has a Stadium card in play, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
