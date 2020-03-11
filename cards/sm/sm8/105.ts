import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-105",
	localId: 105,

	// Card informations
	name: {
		en: "Mareanie",
		fr: "Vorastérie",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 747,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/105/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/105/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/105/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sanosuke Sakuma",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Peck",
			fr: "Picpic",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Pin Missile",
			fr: "Dard-Nuée",
		},
		text: {
			en: "Flip 4 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
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
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
