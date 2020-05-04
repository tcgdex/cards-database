import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-114",
	localId: 114,

	// Card informations
	name: {
		en: "Surfing Pikachu",
		fr: "Pikachu surfeur Niv. 13",
	},

	hp: 50,

	type: [
		Type.LIGHTNING,
	],

	dexId: 25,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/114/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/114/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/114/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Toshinao Aoki",



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Surf",
			fr: "Surf",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
