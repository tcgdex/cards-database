import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-7",
	localId: 7,

	// Card informations
	name: {
		en: "Treecko",
		fr: "Arcko",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 252,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/7/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/7/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/7/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sekio",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sleep Poison",
			fr: "Poison Dodo",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Endormi.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
