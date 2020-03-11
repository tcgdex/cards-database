import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-61",
	localId: 61,

	// Card informations
	name: {
		en: "Cyndaquil",
		fr: "Héricendre",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 155,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/61/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/61/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Beat",
			fr: "Bataille",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flare",
			fr: "Intimidation",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
