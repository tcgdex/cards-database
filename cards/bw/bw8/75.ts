import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-75",
	localId: 75,

	// Card informations
	name: {
		en: "Riolu",
		fr: "Riolu",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 447,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/75/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/75/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/75/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Punch",
			fr: "Koud'Poing",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Kick",
			fr: "Koud'Pied",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
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
