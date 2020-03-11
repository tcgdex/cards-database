import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-27",
	localId: 27,

	// Card informations
	name: {
		en: "Corsola",
		fr: "Corayon",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 222,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/27/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/27/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Bubble Shoot",
			fr: "Tir Bulles",
		},
		text: {
			en: "This attack does 20 damage times the amount of Water Energy attached to this Pokémon to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts, multipliés par le nombre d’Énergies Water attachées à ce Pokémon, à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
