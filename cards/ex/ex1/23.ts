import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-23",
	localId: 23,

	// Card informations
	name: {
		en: "Swampert",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 260,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/23/high",
		},
	},

	evolveFrom: {
		en: "Marshtomp",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 229,
		type: AbilityType.POKEBODY,
		name: {
			en: "Natural Remedy",
		},
		text: {
			en: "Once during your turn (before your attack), when you attach a Water Energy from your hand to Swampert, remove 1 damage counter from Swampert.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Arrow",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Waterfall",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
