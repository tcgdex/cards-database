import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-9",
	localId: 9,

	// Card informations
	name: {
		en: "Celebi-EX",
		fr: "Celebi-EX",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 251,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/9/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/9/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/9/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Toyste Beach",

	abilities: [{
		id: 302,
		type: AbilityType.TALENT,
		name: {
			en: "Time Recall",
			fr: "Rappel Temporel",
		},
		text: {
			en: "Each of your evolved Pokémon can use any attack from its previous Evolutions. (You still need the necessary Energy to use each attack.)",
			fr: "Chacun de vos Pokémon évolués peut utiliser les attaques de ses pré-évolutions. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser chaque attaque.)",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wind Whisk",
			fr: "Rafale Tranchante",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
