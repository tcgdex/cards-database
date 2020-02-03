import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-12",
	localId: 12,

	// Card informations
	name: {
		en: "Chespin",
		fr: "Marisson",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 650,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/12/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/12/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/12/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/12/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Pin Missile",
			fr: "Dard-Nuée",
		},
		text: {
			en: "Flip 4 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card

