import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-22",
	localId: 22,

	// Card informations
	name: {
		en: "Tropius",
		fr: "Tropius",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 357,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/22/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/22/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/22/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Fresh-Picked Fruit",
			fr: "Fruit frais",
		},
		text: {
			en: "Remove 6 damage counters from 1 of your Benched Pokémon.",
			fr: "Retirez 6 marqueurs de dégât à l'un des Pokémon de votre Banc.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cutting Wind",
			fr: "Vent glacial",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
