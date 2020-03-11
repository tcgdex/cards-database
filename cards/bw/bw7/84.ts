import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-84",
	localId: 84,

	// Card informations
	name: {
		en: "Dwebble",
		fr: "Crabicoque",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 557,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/84/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/84/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/84/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flail",
			fr: "Fléau",
		},
		text: {
			en: "Does 10 damage times the number of damage counters on this Pokémon.",
			fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
