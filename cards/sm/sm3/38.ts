import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-38",
	localId: 38,

	// Card informations
	name: {
		en: "Bruxish",
		fr: "Denticrisse",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 779,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/38/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/38/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/38/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Gnash Teeth",
			fr: "Grincedent",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Synchronoise",
			fr: "Synchropeine",
		},
		text: {
			en: "This attack does 20 damage to each of your opponent's Benched Pokémon that shares a type with your opponent's Active Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à chaque Pokémon de Banc de votre adversaire ayant un type en commun avec le Pokémon Actif de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
