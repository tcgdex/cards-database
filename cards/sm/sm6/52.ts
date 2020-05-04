import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-52",
	localId: 52,

	// Card informations
	name: {
		en: "Skrelp",
		fr: "Venalgue",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 690,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/52/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/52/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/52/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mina Nakai",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hook",
			fr: "Crochet",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
