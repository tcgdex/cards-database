import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-44",
	localId: 44,

	// Card informations
	name: {
		en: "Pumpkaboo",
		fr: "Pitrouille",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 710,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/44/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/44/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/44/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/44/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
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
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card

