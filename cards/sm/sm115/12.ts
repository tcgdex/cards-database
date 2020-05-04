import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-12",
	localId: 12,

	// Card informations
	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 79,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/12/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/12/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Misa Tsutsui",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Yawn",
			fr: "Bâillement",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
