import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-22",
	localId: 22,

	// Card informations
	name: {
		en: "Simisear",
		fr: "Flamoutan",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 514,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/22/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/22/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/22/high",
		},
	},

	evolveFrom: {
		en: "Pansear",
		fr: "Flamajou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Flame Burst",
			fr: "Rebondifeu",
		},
		text: {
			en: "Does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fury Swipes",
			fr: "Combo-Griffe",
		},
		text: {
			en: "Flip 3 coins. This attack does 40 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
