import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-3",
	localId: 3,

	// Card informations
	name: {
		en: "Kricketot",
		fr: "Crikzik",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 401,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/3/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/3/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/3/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 46,
		name: "MAHOU"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Beat",
			fr: "Bataille",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Double Headbutt",
			fr: "Double Coup d'Boule",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts supplémentaires pour chaque côté face.",
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
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
