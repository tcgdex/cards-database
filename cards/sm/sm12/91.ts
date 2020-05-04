import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "sui",



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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
