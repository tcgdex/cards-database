import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-52",
	localId: 52,

	// Card informations
	name: {
		en: "Hitmonlee",
		fr: "Kicklee",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 106,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/52/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/52/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/52/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Kick",
			fr: "Koud'pied",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "High Jump Kick",
			fr: "Pied voltige",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
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
