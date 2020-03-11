import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-51",
	localId: 51,

	// Card informations
	name: {
		en: "Zekrom",
	},

	hp: 130,

	type: [
		Type.LIGHTNING,
	],

	dexId: 644,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/51/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Outrage",
		},
		text: {
			en: "Does 10 more damage for each damage counter on this Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Bolt Strike",
		},
		text: {
			en: "This Pokémon does 40 damage to itself.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
