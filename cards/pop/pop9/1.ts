import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop9-1",
	localId: 1,

	// Card informations
	name: {
		en: "Garchomp",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 445,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop9/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop9/1/high",
		},
	},

	evolveFrom: {
		en: "Gabite",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dragon Rage",
		},
		text: {
			en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Jet Sword",
		},
		text: {
			en: "Discard 2 Energy attached to Garchomp and this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "POP Series 9",
		code: "pop9"
	}
}

export default card
