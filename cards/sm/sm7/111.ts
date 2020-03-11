import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-111",
	localId: 111,

	// Card informations
	name: {
		en: "Wingull",
		fr: "Goélise",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 278,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/111/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/111/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/111/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/111/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Glide",
			fr: "Glissement",
		},
		damage: 10
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
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
