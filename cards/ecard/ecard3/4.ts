import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-4",
	localId: 4,

	// Card informations
	name: {
		en: "Articuno",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 144,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 1016,
		type: AbilityType.POKEBODY,
		name: {
			en: "Water Immunity",
		},
		text: {
			en: "You can't attach Water Energy cards from your hand to Articuno.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Freeze Solid",
		},
		text: {
			en: "If there are any Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Articuno.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ice Cyclone",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. If tails, this attack does 10 damage to each of your Pokémon in play. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
