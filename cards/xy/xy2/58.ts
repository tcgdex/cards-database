import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-58",
	localId: 58,

	// Card informations
	name: {
		en: "Scraggy",
		fr: "Baggiguane",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 559,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/58/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/58/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/58/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Rap",
			fr: "Frap'Keu",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
