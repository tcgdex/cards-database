import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-75",
	localId: 75,

	// Card informations
	name: {
		en: "Mudbray",
		fr: "Tiboudet",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 749,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/75/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/75/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/75/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Double Kick",
			fr: "Double Pied",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
