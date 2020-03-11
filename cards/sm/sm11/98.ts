import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-98",
	localId: 98,

	// Card informations
	name: {
		en: "Salandit",
		fr: "Tritox",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 757,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/98/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/98/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/98/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Suffocating Gas",
			fr: "Gaz Suffocant",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
