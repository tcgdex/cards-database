import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-47",
	localId: 47,

	// Card informations
	name: {
		en: "Kangaskhan",
		fr: "Kangourex",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 115,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/47/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/47/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/47/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 70,
		name: "You Iribi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Parental Fury",
			fr: "Fureur Maternelle",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 40 damage for each heads.",
			fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 40 dégâts pour chaque côté face.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
