import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-65",
	localId: 65,

	// Card informations
	name: {
		en: "Teddiursa",
		fr: "Teddiursa",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 216,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/65/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/65/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/65/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/65/high.png",
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
			en: "Take Down",
			fr: "Bélier",
		},
		text: {
			en: "Teddiursa does 10 damage to itself.",
			fr: "Teddiursa s'inflige 10 dégâts.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card

