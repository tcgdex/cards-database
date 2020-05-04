import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-55",
	localId: 55,

	// Card informations
	name: {
		en: "Stufful",
		fr: "Nounourson",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 759,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/55/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/55/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flop",
			fr: "Flop",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
