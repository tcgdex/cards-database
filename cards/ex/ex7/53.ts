import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-53",
	localId: 53,

	// Card informations
	name: {
		en: "Dratini",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 147,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/53/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dragon Song",
		},
		text: {
			en: "Each Defending Pokémon is now Asleep.",
		},
	},{
		cost: [
			Type.WATER,
			Type.LIGHTNING
		],
		name: {
			en: "Tail Strike",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
