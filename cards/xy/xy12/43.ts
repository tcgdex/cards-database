import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-43",
	localId: 43,

	// Card informations
	name: {
		en: "Nidoran♂",
		fr: "Nidoran♂",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 32,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/43/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/43/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/43/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Double Stab",
			fr: "Entaille Double",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
