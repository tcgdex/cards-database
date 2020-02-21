import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-103",
	localId: 103,

	// Card informations
	name: {
		en: "Bagon",
		fr: "Draby",
	},

	hp: 60,

	type: [
		Type.DRAGON,
	],

	dexId: 371,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/103/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/103/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/103/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 58,
		name: "Yumi"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Rock Head",
			fr: "Tête de Roc",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 10 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 10 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FAIRY,
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
