import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-129",
	localId: 129,

	// Card informations
	name: {
		en: "Starly",
		fr: "Etourmi",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 396,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/129/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/129/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/129/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/129/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Peck",
			fr: "Picpic",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
