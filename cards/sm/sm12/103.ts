import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-103",
	localId: 103,

	// Card informations
	name: {
		en: "Marshadow",
		fr: "Marshadow",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 802,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/103/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/103/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/103/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "0313",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shadow Imitation",
			fr: "Ombre Imitante",
		},
		text: {
			en: "Choose 1 of your opponent's Active Pokémon's non-GX attacks and use it as this attack.",
			fr: "Choisissez l’une des attaques non GX du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
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

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
