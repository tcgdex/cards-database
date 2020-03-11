import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-71",
	localId: 71,

	// Card informations
	name: {
		en: "Ferroseed",
		fr: "Grindur",
	},

	hp: 50,

	type: [
		Type.METAL,
	],

	dexId: 597,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/71/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/71/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/71/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "MAHOU",



	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Pierce",
			fr: "Transpercement",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
