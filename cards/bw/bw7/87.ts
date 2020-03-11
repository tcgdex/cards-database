import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-87",
	localId: 87,

	// Card informations
	name: {
		en: "Mienfoo",
		fr: "Kungfouine",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 619,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/87/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/87/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Pound",
			fr: "Écras'Face",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
