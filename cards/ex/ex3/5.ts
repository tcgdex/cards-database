import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-5",
	localId: 5,

	// Card informations
	name: {
		en: "Golem",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 76,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/5/high",
		},
	},

	evolveFrom: {
		en: "Graveler",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hisao Nakamura",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Vengeance",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each damage counter on all of your Active Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Slide",
		},
		text: {
			en: "Does 20 damage to 2 of your opponent's Benched Pokémon (1 if there is only 1). (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
