import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-14",
	localId: 14,

	// Card informations
	name: {
		en: "Dewpider",
		fr: "Araqua",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 751,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/14/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/14/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/14/high",
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
			Type.GRASS
		],
		name: {
			en: "Ambush",
			fr: "Embuscade",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 10 dégâts supplémentaires.",
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
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
