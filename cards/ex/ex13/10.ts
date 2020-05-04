import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-10",
	localId: 10,

	// Card informations
	name: {
		en: "Kingdra δ",
	},

	hp: 110,

	type: [
		Type.FIRE,
		Type.METAL,
	],

	dexId: 230,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/10/high",
		},
	},

	evolveFrom: {
		en: "Seadra",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 1089,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Dragon Curse",
		},
		text: {
			en: "Once during your turn (before your attack), if Kingdra is your Active Pokémon, you may put 2 damage counters on 1 of your opponent's Pokémon with δ on its card. This power can't be used if Kingdra is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Extra Flame",
		},
		text: {
			en: "If the Defending Pokémon is Pokémon-ex, this attack does 30 damage plus 30 more damage.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heat Blast",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
