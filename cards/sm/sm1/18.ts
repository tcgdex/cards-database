import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-18",
	localId: 18,

	// Card informations
	name: {
		en: "Bounsweet",
		fr: "Croquine",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 761,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/18/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/18/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/18/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sweet Scent",
			fr: "Doux Parfum",
		},
		text: {
			en: "Heal 30 damage from 1 of your Pokémon.",
			fr: "Soignez 30 dégâts à l’un de vos Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Splash",
			fr: "Trempette",
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
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
