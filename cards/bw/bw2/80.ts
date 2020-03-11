import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-80",
	localId: 80,

	// Card informations
	name: {
		en: "Pidove",
		fr: "Poichigeon",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 519,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/80/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/80/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gust",
			fr: "Tornade",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
