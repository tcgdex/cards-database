import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-40",
	localId: 40,

	// Card informations
	name: {
		en: "Tentacool",
		fr: "Tentacool",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 72,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/40/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/40/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/40/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/40/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bubble Jutsu",
			fr: "Bulle Jutsu",
		},
		text: {
			en: "If you played Janine from your hand during this turn, this attack does 50 more damage.",
			fr: "Si vous avez joué Jeannine de votre main pendant ce tour, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

