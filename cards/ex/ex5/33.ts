import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-33",
	localId: 33,

	// Card informations
	name: {
		en: "Dodrio",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 85,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/33/high",
		},
	},

	evolveFrom: {
		en: "Doduo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Miki Tanaka",

	abilities: [{
		id: 1021,
		type: AbilityType.POKEBODY,
		name: {
			en: "Fast Feet",
		},
		text: {
			en: "Dodrio can retreat even when it is Asleep or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Retaliate",
		},
		text: {
			en: "Does 10 damage times the number of damage counters on Dodrio.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slashing Strike",
		},
		text: {
			en: "Flip a coin. If tails, Dodrio can't use Slashing Strike during your next turn.",
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
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
