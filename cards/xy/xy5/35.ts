import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-35",
	localId: 35,

	// Card informations
	name: {
		en: "Swampert",
		fr: "Laggron",
	},

	hp: 150,

	type: [
		Type.WATER,
	],

	dexId: 260,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/35/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/35/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/35/high",
		},
	},

	evolveFrom: {
		en: "Marshtomp",
		fr: "Flobio",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Shigenori Negishi",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Water Arrow",
			fr: "Flèche d'Eau",
		},
		text: {
			en: "This attack does 60 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 60 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Waterfall",
			fr: "Cascade",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
