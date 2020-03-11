import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-61",
	localId: 61,

	// Card informations
	name: {
		en: "Duskull",
		fr: "Skelénox",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 355,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/61/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/61/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Confuse Ray",
			fr: "Onde Folie",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
			fr: "Le Pokémon Défenseur est maintenant Confus.",
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
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
