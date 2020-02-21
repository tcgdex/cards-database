import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-63",
	localId: 63,

	// Card informations
	name: {
		en: "Shuppet",
		fr: "Polichombr",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 353,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/63/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/63/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/63/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Headbutt",
			fr: "Coup d’Boule",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Will-O-Wisp",
			fr: "Feu Follet",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
