import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-3",
	localId: 3,

	// Card informations
	name: {
		en: "Arbok",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 24,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/3/high",
		},
	},

	evolveFrom: {
		en: "Ekans",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kyoko Umemoto",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Poison Spray",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Reaction",
		},
		text: {
			en: "If the Defending Pokémon is Poisoned, this attack does 20 damage plus 20 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
