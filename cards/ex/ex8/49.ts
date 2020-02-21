import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-49",
	localId: 49,

	// Card informations
	name: {
		en: "Swellow",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 277,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/49/high",
		},
	},

	evolveFrom: {
		en: "Taillow",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mid-air Crush",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Flip a coin. If heads, your opponent discards 1 Energy card, if any, attached to that Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Nosedive",
		},
		text: {
			en: "Flip a coin. If tails, Swellow does 10 damage to itself.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
