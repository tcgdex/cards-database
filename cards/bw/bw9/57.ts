import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-57",
	localId: 57,

	// Card informations
	name: {
		en: "Cofagrigus",
		fr: "Tutankafer",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 563,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/57/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/57/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/57/high",
		},
	},

	evolveFrom: {
		en: "Yamask",
		fr: "Tutafeh",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Elongating Arms",
			fr: "Bras à Rallonges",
		},
		text: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à 1 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crazy Slap",
			fr: "Gifle Folle",
		},
		text: {
			en: "Flip 4 coins. This attack does 40 damage times the number of heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
