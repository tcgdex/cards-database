import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-35",
	localId: 35,

	// Card informations
	name: {
		en: "Drowzee",
		fr: "Soporifik",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 96,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/35/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/35/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/35/high",
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
			Type.PSYCHIC
		],
		name: {
			en: "Sinister Suggestion",
			fr: "Suggestion Sinistre",
		},
		text: {
			en: "Whenever your opponent flips a coin during his or her next turn, treat it as tails.",
			fr: "Chaque fois que votre adversaire lance une pièce pendant son prochain tour, considérez que c'est pile.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Psyshot",
			fr: "Piqûre Psy",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
