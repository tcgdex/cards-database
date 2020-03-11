import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-96",
	localId: 96,

	// Card informations
	name: {
		en: "Salamence ex",
	},

	hp: 160,

	type: [
		Type.COLORLESS,
	],

	dexId: 373,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/96/high",
		},
	},

	evolveFrom: {
		en: "Shelgon",
	},

	tags: [
		Tag.EX,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Volcanic Flame",
		},
		text: {
			en: "Discard the top 5 cards from your deck.",
		},
		damage: 150
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Wave",
		},
		text: {
			en: "Discard all Water Energy attached to Salamence ex. This attack does 30 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIRE,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
