import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-35",
	localId: 35,

	// Card informations
	name: {
		en: "Vanillite",
		fr: "Sorbébé",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 582,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/35/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/35/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/35/high",
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
			en: "Snow Squall",
			fr: "Rafale de Neige",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
