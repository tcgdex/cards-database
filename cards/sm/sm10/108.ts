import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-108",
	localId: 108,

	// Card informations
	name: {
		en: "Murkrow",
		fr: "Cornèbre",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 198,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/108/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/108/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/108/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 112,
		name: "0313"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Astonish",
			fr: "Étonnement",
		},
		text: {
			en: "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck.",
			fr: "Choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck.",
		},
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
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
