import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-30",
	localId: 30,

	// Card informations
	name: {
		en: "Bergmite",
		fr: "Grelaçon",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 712,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/30/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/30/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/30/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Stomp Off",
			fr: "Tohu-Bohu",
		},
		text: {
			en: "Discard the top card of your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
