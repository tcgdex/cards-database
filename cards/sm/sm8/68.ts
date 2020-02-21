import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-68",
	localId: 68,

	// Card informations
	name: {
		en: "Mareanie",
		fr: "Vorastérie",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 747,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/68/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/68/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Spike Cannon",
			fr: "Picanon",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
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
