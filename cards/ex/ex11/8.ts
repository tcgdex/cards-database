import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-8",
	localId: 8,

	// Card informations
	name: {
		en: "Latias δ",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
		Type.METAL,
	],

	dexId: 380,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/8/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 830,
		type: AbilityType.POKEBODY,
		name: {
			en: "Delta Aura",
		},
		text: {
			en: "If you have Latios or Latios ex in play, the attack cost of Latias's Extra Crush is now Lightning Metal Colorless.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Spiral Drain",
		},
		text: {
			en: "Remove 2 damage counters from Latias.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Extra Crush",
		},
		text: {
			en: "If your opponent has no Pokémon-ex in play, this attack does nothing.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
