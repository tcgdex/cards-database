import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-71",
	localId: 71,

	// Card informations
	name: {
		en: "Klink",
		fr: "Tic",
	},

	hp: 50,

	type: [
		Type.METAL,
	],

	dexId: 599,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/71/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/71/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/71/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/71/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Disorderly Flip",
			fr: "Renverse Désordre",
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

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

