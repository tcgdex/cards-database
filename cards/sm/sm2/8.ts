import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 28,
		name: "match"
	},



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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
