import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-47",
	localId: 47,

	// Card informations
	name: {
		en: "Luxray BREAK",
		fr: "Luxray TURBO",
	},

	hp: 170,

	type: [
		Type.LIGHTNING,
	],

	dexId: 405,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/47/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/47/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/47/high",
		},
	},

	evolveFrom: {
		en: "Luxray",
		fr: "Luxray",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wild Fury",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 40 more damage for each heads.",
		},
		damage: 130
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Furie Sauvage",
		},
		text: {
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
		},
		damage: "130+"
	}],







	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
