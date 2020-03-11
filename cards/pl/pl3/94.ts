import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-94",
	localId: 94,

	// Card informations
	name: {
		en: "Buneary",
		fr: "Laporeille",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 427,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/94/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/94/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bounce",
			fr: "Faire des bonds",
		},
		text: {
			en: "Switch Buneary with 1 of your Benched Pokémon.",
			fr: "Échangez Laporeille avec 1 des Pokémon de votre Banc.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mini Drain",
			fr: "Mini-assèchement",
		},
		text: {
			en: "Remove 1 damage counter from Buneary.",
			fr: "Retirez à Laporeille 1 marqueur de dégât.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
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
