import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-18",
	localId: 18,

	// Card informations
	name: {
		en: "Glalie",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 362,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/18/high",
		},
	},

	evolveFrom: {
		en: "Snorunt",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hiroki Fuchino",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wreck",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 20 damage plus 50 more damage. Discard that Stadium card.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Avalanche",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "+20"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
