import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-114",
	localId: 114,

	// Card informations
	name: {
		en: "Drilbur",
		fr: "Rototaupe",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 529,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/114/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/114/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/114/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rototiller",
			fr: "Fertilisation",
		},
		text: {
			en: "Shuffle a card from your discard pile into your deck.",
			fr: "Mélangez une carte de votre pile de défausse avec votre deck.",
		},
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Mud-Slap",
			fr: "Coud’Boue",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
