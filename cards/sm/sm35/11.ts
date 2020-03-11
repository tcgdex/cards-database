import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-11",
	localId: 11,

	// Card informations
	name: {
		en: "Torkoal",
		fr: "Chartor",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 324,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/11/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/11/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/11/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "High-Pressure Heat",
			fr: "Chaleur Sous Pression",
		},
		text: {
			en: "During your next turn, this Pokémon's High-Pressure Heat attack does 50 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l’attaque Chaleur Sous Pression de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes",
		},
		text: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
