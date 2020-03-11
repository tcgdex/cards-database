import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-34",
	localId: 34,

	// Card informations
	name: {
		en: "Starmie",
		fr: "Staross",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 121,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/34/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/34/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/34/high",
		},
	},

	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Recover",
			fr: "Soin",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon and heal all damage from it.",
			fr: "Défaussez une Énergie attachée à ce Pokémon et soignez tous les dégâts de ce Pokémon.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Core Splash",
			fr: "Trempe-Cœur",
		},
		text: {
			en: "If this Pokémon has any Psychic Energy attached to it, this attack does 30 more damage.",
			fr: "Si de l'Énergie Psychic est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
