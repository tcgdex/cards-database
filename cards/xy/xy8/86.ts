import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-86",
	localId: 86,

	// Card informations
	name: {
		en: "Pancham",
		fr: "Pandespiègle",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 674,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/86/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/86/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/86/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Pompous Punch",
			fr: "Coup d'Poing Solennel",
		},
		text: {
			en: "Discard a random card from your opponent's hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
