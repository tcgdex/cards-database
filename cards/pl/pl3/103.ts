import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-103",
	localId: 103,

	// Card informations
	name: {
		en: "Drifloon",
		fr: "Baudrive",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 425,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/103/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/103/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/103/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Reckless Charge",
			fr: "Attaque imprudente",
		},
		text: {
			en: "Drifloon does 10 damage to itself.",
			fr: "Baudrive s'inflige 10 dégâts.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Collect",
			fr: "Collectionner",
		},
		text: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+10"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
