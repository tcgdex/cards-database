import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base6-25",
	localId: 25,

	// Card informations
	name: {
		en: "Hypno",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 97,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base6/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/25/high",
		},
	},

	evolveFrom: {
		en: "Drowzee",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Prophecy",
		},
		text: {
			en: "Look at up to 3 cards from the top of either player's deck and rearrange them as you like.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Dark Mind",
		},
		text: {
			en: "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card
