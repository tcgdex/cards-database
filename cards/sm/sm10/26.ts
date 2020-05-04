import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-26",
	localId: 26,

	// Card informations
	name: {
		en: "Litten",
		fr: "Flamiaou",
	},

	hp: 50,

	type: [
		Type.FIRE,
	],

	dexId: 725,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/26/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/26/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/26/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "0313",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Singe",
			fr: "Roussi",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
