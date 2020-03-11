import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-45",
	localId: 45,

	// Card informations
	name: {
		en: "Golett",
		fr: "Gringolem",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 622,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/45/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/45/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/45/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Beat",
			fr: "Bataille",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Mega Punch",
			fr: "Ultimapoing",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
