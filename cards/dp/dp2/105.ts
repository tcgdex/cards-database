import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-105",
	localId: 105,

	// Card informations
	name: {
		en: "Teddiursa",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 216,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/105/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yuka Morii",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rest",
		},
		text: {
			en: "Remove all Special Conditions and 2 damage counters from Teddiursa. Teddiursa is now Asleep.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sweet Palm",
		},
		text: {
			en: "Before doing damage, remove 1 damage counter from the Defending Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
