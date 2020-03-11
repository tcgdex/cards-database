import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-65",
	localId: 65,

	// Card informations
	name: {
		en: "Porygon2",
		fr: "Porygon2",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 233,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/65/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/65/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/65/high",
		},
	},

	evolveFrom: {
		en: "Porygon",
		fr: "Porygon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "MAHOU",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sharpen",
			fr: "Affûtage",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tri Attack",
			fr: "Triplattaque",
		},
		text: {
			en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
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
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
