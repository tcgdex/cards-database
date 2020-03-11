import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-18",
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
			en: "https://assets.tcgdex.net/en/sm/sm7/18/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/18/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/18/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Saya Tsuruta",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Pheromone Signals",
			fr: "Signaux de Phéromones",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
