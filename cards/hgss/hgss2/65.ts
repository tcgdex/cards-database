import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss2/65/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/65/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/65/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
