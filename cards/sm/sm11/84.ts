import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-84",
	localId: 84,

	// Card informations
	name: {
		en: "Mesprit",
		fr: "Créfollet",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 481,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/84/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/84/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/84/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sekio",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "First Contact",
			fr: "Premier Contact",
		},
		text: {
			en: "Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 3 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Mumble",
			fr: "Murmure",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
