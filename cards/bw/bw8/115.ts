import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-115",
	localId: 115,

	// Card informations
	name: {
		en: "Rufflet",
		fr: "Furaiglon",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 627,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/115/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/115/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/115/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/115/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Incessant Peck",
			fr: "Rafal'Bec",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 20 more damage for each heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
