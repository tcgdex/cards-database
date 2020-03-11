import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-33",
	localId: 33,

	// Card informations
	name: {
		en: "Deoxys",
		fr: "Deoxys",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 386,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/33/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/33/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/33/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Close Encounter",
			fr: "Rencontre de l'Au-delà",
		},
		text: {
			en: "If you go first, you can use this attack on your first turn. Draw 2 cards.",
			fr: "Si vous jouez en premier, vous pouvez utiliser cette attaque lors de votre premier tour. Piochez 2 cartes.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Overdrive Smash",
			fr: "Boost Atomisant",
		},
		text: {
			en: "During your next turn, this Pokémon's Overdrive Smash attack does 60 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l'attaque Boost Atomisant de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
