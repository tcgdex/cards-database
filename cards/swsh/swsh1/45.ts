import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-45",
	localId: 45,

	dexId: 118,

	// Card informations
	name: {
		en: "Goldeen",
		fr: "Poissirène",
	},

	hp: 70,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/45/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/45/low",
		}
	},

	evolveTo: [{
		en: "Seaking",
		fr: "Poissoroy",
	}],

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 36,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Horn Attack",
			fr: "Koud’Korne",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
