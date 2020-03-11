import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-80",
	localId: 80,

	// Card informations
	name: {
		en: "Lickitung",
		fr: "Excelangue",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 108,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/80/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/80/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yuka Morii",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Stretch Tongue",
			fr: "Langue à rallonge",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Knock Off",
			fr: "Sabotage",
		},
		text: {
			en: "Choose 1 card from your opponent's hand without looking and discard it.",
			fr: "Choisissez sans regarder une carte de la main de votre adversaire et défaussez-la.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
