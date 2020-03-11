import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-50",
	localId: 50,

	// Card informations
	name: {
		en: "Trubbish",
		fr: "Miamiasme",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 568,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/50/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/50/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/50/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yuka Morii",



	attacks: [{
		cost: [
			Type.PSYCHIC
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
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Drool",
			fr: "Gluant",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
