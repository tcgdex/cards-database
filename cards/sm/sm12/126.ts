import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-126",
	localId: 126,

	// Card informations
	name: {
		en: "Sandygast",
		fr: "Bacabouh",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 769,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/126/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/126/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/126/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/126/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Astonish",
			fr: "Étonnement",
		},
		text: {
			en: "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck.",
			fr: "Choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre cette carte et la mélange avec son deck.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hook",
			fr: "Crochet",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

