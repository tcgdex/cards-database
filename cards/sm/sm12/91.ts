import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-91",
	localId: 91,

	// Card informations
	name: {
		en: "Skrelp",
		fr: "Venalgue",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 690,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/91/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/91/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/91/high",
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
			en: "Poison Breath",
			fr: "Haleine Empoisonnée",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
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
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
