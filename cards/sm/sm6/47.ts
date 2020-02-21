import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-47",
	localId: 47,

	// Card informations
	name: {
		en: "Honedge",
		fr: "Monorpale",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 679,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/47/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/47/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/47/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Metal Sound",
			fr: "Strido-Son",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
