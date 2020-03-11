import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-11",
	localId: 11,

	// Card informations
	name: {
		en: "Venomoth",
		fr: "Aéromite",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 49,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/11/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/11/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/11/high",
		},
	},

	evolveFrom: {
		en: "Venonat",
		fr: "Mimitoss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mina Nakai",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Assassin Flight",
			fr: "Vol Assassin",
		},
		text: {
			en: "You can use this attack only if your opponent's Active Pokémon is affected by a Special Condition. This attack does 90 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Vous ne pouvez utiliser cette attaque que si le Pokémon Actif de votre adversaire est affecté par un État Spécial. Cette attaque inflige 90 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Poison Powder",
			fr: "Poudre Toxik",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
