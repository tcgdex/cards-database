import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-8",
	localId: 8,

	// Card informations
	name: {
		en: "Wimpod",
		fr: "Sovkipou",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 767,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/8/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/8/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/8/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scamper Away",
			fr: "Cavalcade",
		},
		text: {
			en: "Shuffle this Pokémon and all cards attached to it into your deck.",
			fr: "Mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
