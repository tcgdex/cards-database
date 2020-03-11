import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-12",
	localId: 12,

	// Card informations
	name: {
		en: "Charizard-EX",
		fr: "Dracaufeu-EX",
	},

	hp: 180,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/12/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/12/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "PLANETA",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
			fr: "Cru-Aile",
		},
		damage: 60
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Combustion Blast",
			fr: "Explo-Combustion",
		},
		text: {
			en: "This Pokémon can't use Combustion Blast during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Explo-Combustion pendant votre prochain tour.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
