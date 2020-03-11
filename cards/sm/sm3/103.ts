import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-103",
	localId: 103,

	// Card informations
	name: {
		en: "Porygon",
		fr: "Porygon",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 137,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/103/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/103/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/103/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Code Check",
			fr: "Vérification de Codes",
		},
		text: {
			en: "Look at 1 of your opponent's face-down Prize cards.",
			fr: "Regardez l’une des cartes Récompense de votre adversaire (actuellement face cachée).",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Beam",
			fr: "Rayon",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
