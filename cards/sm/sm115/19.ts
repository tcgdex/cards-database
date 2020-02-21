import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-19",
	localId: 19,

	// Card informations
	name: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 25,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/19/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/19/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/19/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Quick Attack",
			fr: "Vive-Attaque",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
