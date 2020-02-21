import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-27",
	localId: 27,

	// Card informations
	name: {
		en: "Carvanha",
		fr: "Carvanha",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 318,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/27/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/27/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 83,
		name: "Hideki Ishikawa"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Bite",
			fr: "Morsure",
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
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
