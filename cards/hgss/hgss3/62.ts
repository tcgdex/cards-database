import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-62",
	localId: 62,

	// Card informations
	name: {
		en: "Pineco",
		fr: "Pomdepik",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 204,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/62/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/62/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/62/high",
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
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
