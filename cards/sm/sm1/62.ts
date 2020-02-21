import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-62",
	localId: 62,

	// Card informations
	name: {
		en: "Mareanie",
		fr: "Vorastérie",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 747,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/62/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/62/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/62/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Poison Sting",
			fr: "Dard-Venin",
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



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
