import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop7-5",
	localId: 5,

	// Card informations
	name: {
		en: "Mothim",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 414,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop7/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop7/5/high",
		},
	},

	evolveFrom: {
		en: "Burmy",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kazuyuki Kano",



	attacks: [{
		name: {
			en: "Silver Wind",
		},
		text: {
			en: "During your next turn, if an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 40 more damage.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Raging Scales",
		},
		text: {
			en: "If Mothim has any damage counters on it, this attack does 30 damage plus 40 more damage.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "POP Series 7",
		code: "pop7"
	}
}

export default card
