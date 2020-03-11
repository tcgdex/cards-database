import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-81",
	localId: 81,

	// Card informations
	name: {
		en: "Carvanha",
		fr: "Carvanha",
	},

	hp: 50,

	type: [
		Type.DARKNESS,
	],

	dexId: 318,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/81/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/81/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite Away",
			fr: "Morsure énorme",
		},
		text: {
			en: "Flip a coin. If heads, choose a card from your opponent's hand without looking and discard it.",
			fr: "Lancez une pièce. Si c'est face, choisissez sans regarder une carte de la main de votre adversaire et défaussez-la.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
