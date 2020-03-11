import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-161",
	localId: 161,

	// Card informations
	name: {
		en: "Jangmo-o",
		fr: "Bébécaille",
	},

	hp: 70,

	type: [
		Type.DRAGON,
	],

	dexId: 782,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/161/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/161/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/161/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/161/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Headbutt",
			fr: "Dracoud’Boule",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
