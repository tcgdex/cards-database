import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-219",
	localId: 219,

	// Card informations
	name: {
		en: "Dedenne-GX",
	},

	hp: 160,

	type: [
		Type.LIGHTNING,
	],

	dexId: 702,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/219/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/219/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 141,
		name: "PLANETA Igarashi"
	},

	abilities: [{
		id: 423,
		type: AbilityType.TALENT,
		name: {
			en: "Dedechange",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard your hand and draw 6 cards. You can't use more than 1 Dedechange Ability each turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Static Shock",
		},
		damage: 50
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Tingly Return-GX",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Paralyzed. Put this Pokémon and all cards attached to it into your hand. (You can't use more than 1 GX attack in a game.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
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
