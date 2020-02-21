import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-71",
	localId: 71,

	// Card informations
	name: {
		en: "Mankey",
		fr: "Férosinge",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 56,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/71/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/71/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/71/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scout",
			fr: "Espionnage",
		},
		text: {
			en: "Your opponent reveals their hand.",
			fr: "Votre adversaire dévoile sa main.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Low Kick",
			fr: "Balayage",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
