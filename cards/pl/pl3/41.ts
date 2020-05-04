import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-41",
	localId: 41,

	// Card informations
	name: {
		en: "Sableye G",
		fr: "Tenefix ",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 302,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/41/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/41/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.SP,
	],

	illustrator: "Yusuke Ishikawa",



	attacks: [{
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Astonish",
			fr: "Étonnement",
		},
		text: {
			en: "Choose 1 card from your opponent's hand without looking. Look at that card you chose, then have your opponent shuffle that card into his or her deck.",
			fr: "Choisissez sans regarder 1 carte de la main de votre adversaire. Regardez-la, puis demandez à votre adversaire de la mélanger à son deck.",
		},
		damage: 20
	}],



	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
