import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-54",
	localId: 54,

	// Card informations
	name: {
		en: "Elgyem",
		fr: "Lewsor",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 605,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/54/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/54/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/54/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Calm Mind",
			fr: "Plénitude",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
