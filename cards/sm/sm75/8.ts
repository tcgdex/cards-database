import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-8",
	localId: 8,

	// Card informations
	name: {
		en: "Darumaka",
		fr: "Darumarond",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 554,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/8/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/8/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/8/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Damage Rush",
			fr: "Charge Destructrice",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
			fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
