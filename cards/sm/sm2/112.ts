import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-112",
	localId: 112,

	// Card informations
	name: {
		en: "Stufful",
		fr: "Nounourson",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 759,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/112/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/112/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/112/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/112/high.png",
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
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
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

