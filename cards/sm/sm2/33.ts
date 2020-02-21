import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-33",
	localId: 33,

	// Card informations
	name: {
		en: "Vanillite",
		fr: "Sorbébé",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 582,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/33/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/33/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/33/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 35,
		name: "OOYAMA"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Triple Spin",
			fr: "Triple Tour",
		},
		text: {
			en: "Flip 3 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
