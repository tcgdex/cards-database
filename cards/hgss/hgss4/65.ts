import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-65",
	localId: 65,

	// Card informations
	name: {
		en: "Kricketot",
		fr: "Crikzik",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 401,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/65/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/65/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/65/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Beat",
			fr: "Bataille",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
