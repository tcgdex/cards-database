import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-49",
	localId: 49,

	// Card informations
	name: {
		en: "Horsea",
		fr: "Hypotrempe",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 116,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/49/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/49/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/49/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Beat",
			fr: "Bataille",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Fin Smack",
			fr: "Coup d'aileron",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
