import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-8",
	localId: 8,

	// Card informations
	name: {
		en: "Sewaddle",
		fr: "Larveyette",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 540,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/8/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/8/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/8/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Bug Bite",
			fr: "Piqûre",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
