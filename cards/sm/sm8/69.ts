import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-69",
	localId: 69,

	// Card informations
	name: {
		en: "Toxapex",
		fr: "Prédastérie",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 748,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/69/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/69/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/69/high",
		},
	},

	evolveFrom: {
		en: "Mareanie",
		fr: "Vorastérie",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Poison Sting",
			fr: "Dard-Venin",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Venom Fever",
			fr: "Fièvre Envenimée",
		},
		text: {
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 50 damage for each damage counter on that Pokémon.",
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 50 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
