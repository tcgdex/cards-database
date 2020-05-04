import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-67",
	localId: 67,

	// Card informations
	name: {
		en: "Gligar",
		fr: "Scorplane",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 207,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/67/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/67/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mina Nakai",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Double Shot",
			fr: "Double Attaque",
		},
		text: {
			en: "This attack does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
