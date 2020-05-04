import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-28",
	localId: 28,

	// Card informations
	name: {
		en: "Whiscash",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 340,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/28/high",
		},
	},

	evolveFrom: {
		en: "Barboach",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Raging Tremble",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage for each damage counter on Whiscash to each Defending Pokémon. If tails, this attack does 10 damage for each damage counter on Whiscash to the Defending Pokémon.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Dwindling Wave",
		},
		text: {
			en: "Does 70 damage minus 10 damage for each damage counter on Whiscash.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
