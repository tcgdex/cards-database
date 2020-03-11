import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-28",
	localId: 28,

	// Card informations
	name: {
		en: "Sharpedo",
		fr: "Sharpedo",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 319,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/28/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/28/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/28/high",
		},
	},

	evolveFrom: {
		en: "Carvanha",
		fr: "Carvanha",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Jet Headbutt",
			fr: "Bélier Volant",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
