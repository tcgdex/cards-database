import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-102",
	localId: 102,

	// Card informations
	name: {
		en: "Horsea",
		fr: "Hypotrempe",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 116,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/102/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/102/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Smokescreen",
			fr: "Brouillard",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			fr: "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Reverse Thrust",
			fr: "Poussée inverse",
		},
		text: {
			en: "Switch Horsea with 1 of your Benched Pokémon.",
			fr: "Échangez Hypotrempe avec 1 des Pokémon de votre Banc.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
