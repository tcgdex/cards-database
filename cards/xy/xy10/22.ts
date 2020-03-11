import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-22",
	localId: 22,

	// Card informations
	name: {
		en: "Binacle",
		fr: "Opermine",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 688,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/22/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/22/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/22/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Swing Around",
			fr: "Balançoire",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
