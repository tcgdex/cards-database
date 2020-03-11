import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-82",
	localId: 82,

	// Card informations
	name: {
		en: "Fletchling",
		fr: "Passerouge",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 661,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/82/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/82/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Acrobatics",
			fr: "Acrobatie",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts supplémentaires pour chaque côté face.",
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
