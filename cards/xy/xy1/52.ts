import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-52",
	localId: 52,

	// Card informations
	name: {
		en: "Whirlipede",
		fr: "Scobolide",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 544,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/52/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/52/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/52/high",
		},
	},

	evolveFrom: {
		en: "Venipede",
		fr: "Venipatte",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Continuous Tumble",
			fr: "Roulade Continue",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
