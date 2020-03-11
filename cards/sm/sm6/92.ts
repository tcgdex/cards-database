import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-92",
	localId: 92,

	// Card informations
	name: {
		en: "Goomy",
		fr: "Mucuscule",
	},

	hp: 50,

	type: [
		Type.DRAGON,
	],

	dexId: 704,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/92/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/92/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flail",
			fr: "Fléau",
		},
		text: {
			en: "This attack does 10 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
