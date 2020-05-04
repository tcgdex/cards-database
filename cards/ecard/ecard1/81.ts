import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-81",
	localId: 81,

	// Card informations
	name: {
		en: "Hitmonlee",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 106,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Smash Kick",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Stretch Kick",
		},
		text: {
			en: "If your opponent has any Benched Pokémon, chose 1 of them and this attack does 30 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
