import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-57",
	localId: 57,

	// Card informations
	name: {
		en: "Misdreavus",
		fr: "Feuforeve",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 200,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/57/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/57/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/57/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mumble",
			fr: "Marmonner",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Dual Draw",
			fr: "Pioche mutuelle",
		},
		text: {
			en: "Each player draws 3 cards.",
			fr: "Chaque joueur pioche 3 cartes.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
