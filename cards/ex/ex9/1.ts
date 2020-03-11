import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-1",
	localId: 1,

	// Card informations
	name: {
		en: "Blaziken",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 257,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/1/high",
		},
	},

	evolveFrom: {
		en: "Combusken",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 81,
		type: AbilityType.POKEBODY,
		name: {
			en: "Blaze",
		},
		text: {
			en: "As long as Blaziken's remaining HP is 40 or less, Blaziken does 40 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Searing Flame",
		},
		text: {
			en: "The Defending Pokémon is now Burned.",
		},
		damage: 10
	},{
		name: {
			en: "Damage Burn",
		},
		text: {
			en: "If the Defending Pokémon already has any damage counters on it, this attack does 50 damage plus 20 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
