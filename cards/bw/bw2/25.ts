import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-25",
	localId: 25,

	// Card informations
	name: {
		en: "Basculin",
		fr: "Bargantua",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 550,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/25/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/25/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Splatter",
			fr: "Crépitement",
		},
		text: {
			en: "Does 30 damage to one of your oppoent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 30 dégâts à 1 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
