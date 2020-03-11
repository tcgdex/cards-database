import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-95",
	localId: 95,

	// Card informations
	name: {
		en: "Bronzor",
		fr: "Archéomire",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 436,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/95/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/95/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shigenori Negishi",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Payback",
			fr: "Représailles",
		},
		text: {
			en: "If your opponent has only 1 Prize card left, this attack does 60 more damage.",
			fr: "S'il ne reste qu'une seule carte Récompense à votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
