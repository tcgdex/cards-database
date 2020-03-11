import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-49",
	localId: 49,

	// Card informations
	name: {
		en: "Chinchou",
		fr: "Loupio",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 170,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/49/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/49/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/49/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Searching Light",
			fr: "Sonde Lumineuse",
		},
		text: {
			en: "Look at 1 of your face-down Prize cards.",
			fr: "Regardez l’une de vos cartes Récompense (actuellement face cachée).",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
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
