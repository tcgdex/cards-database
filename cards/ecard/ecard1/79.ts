import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-79",
	localId: 79,

	// Card informations
	name: {
		en: "Graveler",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 75,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/79/high",
		},
	},

	evolveFrom: {
		en: "Geodude",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Aya Kusube",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rock Hurl",
		},
		text: {
			en: "Don't apply Resistance.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rock Slide",
		},
		text: {
			en: "Chose 2 of your opponent's Pokémon (1 if he or she has only 1). This attack does 10 damage to each of those Pokémon. (Don't apply Weakness and Resistance for those Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
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
