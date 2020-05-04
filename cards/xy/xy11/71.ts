import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy11/71/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/71/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/71/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",



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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
