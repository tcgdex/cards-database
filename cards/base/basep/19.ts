import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "basep-19",
	localId: 19,

	// Card informations
	name: {
		en: "Sabrina's Abra",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 63,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/basep/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/basep/19/high",
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
			en: "Pound",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Synchronize",
		},
		text: {
			en: "This attack can't be used unless Sabrina's Abra and the Defending Pokémon have the same number of Energy cards attached to them.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Wizards Black Star Promos",
		code: "basep"
	}
}

export default card
