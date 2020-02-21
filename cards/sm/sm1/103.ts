import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-103",
	localId: 103,

	// Card informations
	name: {
		en: "Lillipup",
		fr: "Ponchiot",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 506,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/103/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/103/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/103/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 46,
		name: "MAHOU"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Work Up",
			fr: "Rengorgement",
		},
		text: {
			en: "During your next turn, this Pokémon's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, les attaques de ce Pokémon infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
