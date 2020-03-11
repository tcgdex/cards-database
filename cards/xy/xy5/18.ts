import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-18",
	localId: 18,

	// Card informations
	name: {
		en: "Illumise",
		fr: "Lumivole",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 314,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/18/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/18/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/18/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Helping Hand",
			fr: "Coup d'Main",
		},
		text: {
			en: "Search your deck for a basic Energy card and attach it to 1 of your Benched Pokémon. Shuffle your deck afterward.",
			fr: "Cherchez une carte Énergie de base dans votre deck et attachez-la à l'un de vos Pokémon de Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Twirling Sign",
			fr: "Signe Virevoltant",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
