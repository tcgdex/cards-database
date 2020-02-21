import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-95",
	localId: 95,

	// Card informations
	name: {
		en: "Cutiefly",
		fr: "Bombydou",
	},

	hp: 30,

	type: [
		Type.FAIRY,
	],

	dexId: 742,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/95/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/95/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
