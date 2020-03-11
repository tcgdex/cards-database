import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-87",
	localId: 87,

	// Card informations
	name: {
		en: "Audino",
		fr: "Nanméouïe",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 531,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/87/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/87/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "MAHOU",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Doubleslap",
			fr: "Torgnoles",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
