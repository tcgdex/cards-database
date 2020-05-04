import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-31",
	localId: 31,

	// Card informations
	name: {
		en: "Samurott",
		fr: "Clamiral",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 503,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/31/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/31/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/31/high",
		},
	},

	evolveFrom: {
		en: "Dewott",
		fr: "Mateloutre",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pike",
			fr: "Javelot",
		},
		text: {
			en: "Does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 30 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Surf",
			fr: "Surf",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
