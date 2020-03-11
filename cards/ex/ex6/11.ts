import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-11",
	localId: 11,

	// Card informations
	name: {
		en: "Poliwrath",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 62,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/11/high",
		},
	},

	evolveFrom: {
		en: "Poliwhirl",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 127,
		type: AbilityType.POKEBODY,
		name: {
			en: "Spiral",
		},
		text: {
			en: "As long as Poliwrath is your Active Pokémon, your opponent's Confused Pokémon can't retreat.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Split Spiral Punch",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mega Throw",
		},
		text: {
			en: "If the Defending Pokémon is Pokémon-ex, this attack does 50 damage plus 30 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
