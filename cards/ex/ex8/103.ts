import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-103",
	localId: 103,

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
			en: "https://assets.tcgdex.net/en/ex/ex8/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/103/high",
		},
	},

	evolveFrom: {
		en: "Shelgon",
	},

	tags: [
		Tag.EX,
	],

	illustrator: "Hikaru Koike",

	abilities: [{
		id: 806,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dragon Lift",
		},
		text: {
			en: "The Retreat Cost for each of your Pokémon (excluding Pokémon-ex and Baby Pokémon) is 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flame Jet",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
		},
	},{
		cost: [
			Type.WATER,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bright Flame",
		},
		text: {
			en: "Discard 2 Energy attached to Salamence ex.",
		},
		damage: 120
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
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
