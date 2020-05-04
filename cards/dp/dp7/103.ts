import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-103",
	localId: 103,

	// Card informations
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/103/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/103/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/103/high",
		},
	},

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 263,
		type: AbilityType.POKEBODY,
		name: {
			en: "Energy Burn",
			fr: "Dépense d'énergie",
		},
		text: {
			en: "All Energy attached to Charizard are fire Energy instead of their usual type.",
			fr: "Toutes les Énergies attachées à Dracaufeu sont des Énergies Fire au lieu de leur type habituel.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Fire Spin",
			fr: "Danseflamme",
		},
		text: {
			en: "Discard 2 Energy attached to Charizard.",
			fr: "Défaussez 2 Énergies attachées à Dracaufeu.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
