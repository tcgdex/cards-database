import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-51",
	localId: 51,

	// Card informations
	name: {
		en: "Froakie",
		fr: "Grenousse",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 656,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/51/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/51/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/51/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Quick Attack",
			fr: "Vive-Attaque",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
