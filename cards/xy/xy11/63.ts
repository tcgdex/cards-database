import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-63",
	localId: 63,

	// Card informations
	name: {
		en: "Pawniard",
		fr: "Scalpion",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 624,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/63/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/63/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/63/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Charge Order",
			fr: "Ordre de Charge",
		},
		text: {
			en: "This attack does 10 damage times the number of your Pawniard.",
			fr: "Cette attaque inflige 10 dégâts multipliés par le nombre de vos Scalpion.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
