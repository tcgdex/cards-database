import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-3",
	localId: 3,

	// Card informations
	name: {
		en: "Scyther",
		fr: "Insécateur",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 123,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/3/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/3/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/3/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fury Cutter",
			fr: "Taillade",
		},
		text: {
			en: "Flip 3 coins. If 1 of them is heads, this attack does 20 more damage. If 2 of them are heads, this attack does 50 more damage. If all of them are heads, this attack does 70 more damage.",
			fr: "Lancez 3 pièces. S’il n’y a qu’un côté face, cette attaque inflige 20 dégâts supplémentaires. S’il y a 2 côtés face, cette attaque inflige 50 dégâts supplémentaires. S’il y a 3 côtés face, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
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
