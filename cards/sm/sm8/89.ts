import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-89",
	localId: 89,

	// Card informations
	name: {
		en: "Espeon",
		fr: "Mentali",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 196,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/89/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/89/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/89/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ryota Murayama",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Allure",
			fr: "Allure",
		},
		text: {
			en: "Draw 3 cards.",
			fr: "Piochez 3 cartes.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Energy Crush",
			fr: "Écras’Énergie",
		},
		text: {
			en: "This attack does 20 more damage times the amount of Energy attached to all of your opponent's Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies attachées aux Pokémon de votre adversaire.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
