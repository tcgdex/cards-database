import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-99",
	localId: 99,

	// Card informations
	name: {
		en: "Furfrou",
		fr: "Couafarel",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 676,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/99/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/99/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/99/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/99/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Return",
			fr: "Retour",
		},
		text: {
			en: "You may draw cards until you have 5 cards in your hand.",
			fr: "Vous pouvez piocher des cartes jusqu’à ce que vous ayez 5 cartes en main.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card

