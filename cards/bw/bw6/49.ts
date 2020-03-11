import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-49",
	localId: 49,

	// Card informations
	name: {
		en: "Drifloon",
		fr: "Baudrive",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 425,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/49/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/49/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/49/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "MAHOU",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Sneaky Placement",
			fr: "Placement Vicieux",
		},
		text: {
			en: "Put 1 damage counter on 1 of your opponent's Pokémon.",
			fr: "Placez 1 marqueur de dégâts sur 1 des Pokémon de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
