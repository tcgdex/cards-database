import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-70",
	localId: 70,

	// Card informations
	name: {
		en: "Taillow",
		fr: "Nirondelle",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 276,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/70/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/70/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/70/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/70/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Peck",
			fr: "Double Picpic",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card

