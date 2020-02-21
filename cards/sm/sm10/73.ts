import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-73",
	localId: 73,

	// Card informations
	name: {
		en: "Koffing",
		fr: "Smogo",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 109,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/73/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/73/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/73/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Foul Odor",
			fr: "Odeur Fétide",
		},
		text: {
			en: "Both Active Pokémon are now Confused.",
			fr: "Les deux Pokémon Actifs sont maintenant Confus.",
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
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
