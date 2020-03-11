import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-39",
	localId: 39,

	// Card informations
	name: {
		en: "Munna",
		fr: "Munna",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 517,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/39/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/39/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/39/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "MAHOU",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "See Through",
			fr: "Main Transparente",
		},
		text: {
			en: "Your opponent reveals his or her hand.",
			fr: "Votre adversaire montre sa main.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Double Headbutt",
			fr: "Double Coup d'Boule",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
