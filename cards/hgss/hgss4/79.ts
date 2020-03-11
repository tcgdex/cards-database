import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-79",
	localId: 79,

	// Card informations
	name: {
		en: "Swinub",
		fr: "Marcacrin",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 220,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/79/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/79/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/79/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Headbutt",
			fr: "Coup d'boule",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ice Ball",
			fr: "Ball'glace",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
