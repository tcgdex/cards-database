import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-27",
	localId: 27,

	// Card informations
	name: {
		en: "Koffing",
		fr: "Smogo",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 109,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/27/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/27/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Division",
			fr: "Division",
		},
		text: {
			en: "Search your deck for up to 2 Koffing and put them onto your Bench. Shuffle your deck afterward.",
			fr: "Cherchez jusqu'à 2 Smogo dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
