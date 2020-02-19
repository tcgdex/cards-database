import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-51",
	localId: 51,

	// Card informations
	name: {
		en: "Venipede",
		fr: "Venipatte",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 543,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/51/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/51/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/51/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/51/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Poison Sting",
			fr: "Dard-Venin",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card

