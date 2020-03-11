import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-14",
	localId: 14,

	// Card informations
	name: {
		en: "Emboar-EX",
		fr: "Roitiflam-EX",
	},

	hp: 180,

	type: [
		Type.FIRE,
	],

	dexId: 500,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/14/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/14/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/14/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Spiral Punch",
			fr: "Coup d'Poing Spirale",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 20 more damage for each heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Strong Flare",
			fr: "Flamboiement Intense",
		},
		text: {
			en: "Discard 2 Energy attached to this Pokémon.",
			fr: "Défaussez 2 Énergies attachées à ce Pokémon.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
