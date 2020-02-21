import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-109",
	localId: 109,

	// Card informations
	name: {
		en: "Skitty",
		fr: "Skitty",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 300,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/109/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/109/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/109/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Triple Slap",
			fr: "Triple Gifle",
		},
		text: {
			en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
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
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
