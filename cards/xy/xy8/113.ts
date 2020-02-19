import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-113",
	localId: 113,

	// Card informations
	name: {
		en: "Noivern BREAK",
		fr: "Bruyverne TURBO",
	},

	hp: 130,

	type: [
		Type.DRAGON,
	],

	dexId: 715,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/113/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/113/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/113/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/113/high.png",
		},
	},

	evolveFrom: {
		en: "Noivern",
		fr: "Bruyverne",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Synchro Woofer",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "If you have the same number of cards in your hand as your opponent, this attack does 80 more damage.",
		},
		damage: 70
	},{
		cost: [
			Type.PSYCHIC,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			fr: "Fréquence Synchro",
		},
		text: {
			fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: "70+"
	}],







	rarity: Rarity.RareBREAK,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card

