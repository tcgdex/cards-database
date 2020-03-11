import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-78",
	localId: 78,

	// Card informations
	name: {
		en: "Seedot",
		fr: "Grainipiot Niv. 8",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 273,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/78/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/78/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/78/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Harden",
			fr: "Armure",
		},
		text: {
			en: "During your opponent's next turn, if Seedot would be damaged by an attack, prevent that attack's damage done to Seedot if that damage is 40 or less.",
			fr: "Lors du prochain tour de votre adversaire, si une attaque inflige des dégâts à Grainipiot, prévenez ces dégâts s'ils sont de 40 ou moins.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Astonish",
			fr: "Étonnement",
		},
		text: {
			en: "Choose 1 card from your opponent's hand without looking. Look at that card you chose, then have your opponent shuffle that card into his or her deck.",
			fr: "Choisissez sans regarder 1 carte de la main de votre adversaire. Regardez-la puis demandez à votre adversaire de la mélanger à son deck.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
