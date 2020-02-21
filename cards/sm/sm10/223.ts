import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-223",
	localId: 223,

	// Card informations
	name: {
		en: "Honchkrow-GX",
	},

	hp: 210,

	type: [
		Type.DARKNESS,
	],

	dexId: 430,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/223/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/223/high",
		},
	},

	evolveFrom: {
		en: "Murkrow",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 140,
		name: "sadaji"
	},

	abilities: [{
		id: 464,
		type: AbilityType.TALENT,
		name: {
			en: "Ruler of the Night",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your opponent can't play any Pokémon Tool, Special Energy, or Stadium cards from their hand.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Feather Storm",
		},
		text: {
			en: "This attack does 30 damage to 2 of your opponent's Benched Pokémon-GX and Pokémon-EX. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 90
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Unfair-GX",
		},
		text: {
			en: "Your opponent reveals their hand. Discard 2 cards from it. (You can't use more than 1 GX attack in a game.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
