import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-14",
	localId: 14,

	// Card informations
	name: {
		en: "Wailord",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 321,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/14/high",
		},
	},

	evolveFrom: {
		en: "Wailmer",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 220,
		type: AbilityType.POKEBODY,
		name: {
			en: "Reactive Lift",
		},
		text: {
			en: "As long as Wailord has any React Energy cards attached to it, the Retreat Cost for each of your Water Pokémon (excluding Pokémon-ex) is 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hypno Splash",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rely on Friends",
		},
		text: {
			en: "Does 40 damage plus 10 more damage for each of your Benched Stage 1 Evolved Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
