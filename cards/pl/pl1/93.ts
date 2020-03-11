import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-93",
	localId: 93,

	// Card informations
	name: {
		en: "Skitty",
		fr: "Skitty",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 300,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/93/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/93/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		name: {
			en: "Heal Bell",
			fr: "Glas de soin",
		},
		text: {
			en: "Remove 1 damage counter from each of your Pokémon.",
			fr: "Retirez à chacun de vos Pokémon 1 marqueur de dégât.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
			fr: "Bélier",
		},
		text: {
			en: "Skitty does 10 damage to itself.",
			fr: "Skitty s'inflige 10 dégâts.",
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
		name: "Platinum",
		code: "pl1"
	}
}

export default card
