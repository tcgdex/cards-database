import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-75",
	localId: 75,

	// Card informations
	name: {
		en: "Gothita",
		fr: "Scrutella",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 574,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/75/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/75/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/75/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Pound",
			fr: "Écras'Face",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psypunch",
			fr: "Coup de Poing Psy",
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
