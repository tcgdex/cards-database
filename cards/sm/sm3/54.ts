import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-54",
	localId: 54,

	// Card informations
	name: {
		en: "Croagunk",
		fr: "Cradopaud",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 453,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/54/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/54/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/54/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Frog Hop",
			fr: "Bond de Grenouille",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
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
