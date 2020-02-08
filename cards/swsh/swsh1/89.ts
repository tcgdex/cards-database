import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-89",
	localId: 89,

	// Card informations
	name: {
		en: "Sinistea",
		fr: "Théffroi",
	},

	hp: 30,

	type: [
		Type.PSYCHIC,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/89/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/89/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/89/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/89/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Saya Tsuruta"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Teatime",
			fr: "Thérémonie",
		},
		text: {
			en: "Each player draws 2 cards.",
			fr: "Chaque joueur pioche 2 cartes.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
