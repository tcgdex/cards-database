import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-15",
	localId: 15,

	// Card informations
	name: {
		en: "Fomantis",
		fr: "Mimantis",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 753,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/15/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/15/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/15/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yuka Morii",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sweet Scent",
			fr: "Doux Parfum",
		},
		text: {
			en: "Heal 30 damage from 1 of your Pokémon.",
			fr: "Soignez 30 dégâts à l’un de vos Pokémon.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Leafage",
			fr: "Feuillage",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
