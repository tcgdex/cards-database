import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "det1-17",
	localId: 17,

	// Card informations
	name: {
		en: "Ditto",
		fr: "Métamorph",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 132,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/det1/17/low",
			fr: "https://assets.tcgdex.net/fr/sm/det1/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/det1/17/high",
			fr: "https://assets.tcgdex.net/fr/sm/det1/17/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],





	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Copy Anything",
			fr: "Copie Tout",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon's attacks and use it as this attack. If this Pokémon doesn't have the necessary Energy to use that attack, this attack does nothing.",
			fr: "Choisissez l’une des attaques des Pokémon de votre adversaire et utilisez-la en tant que cette attaque. Si ce Pokémon n’a pas l’Énergie nécessaire pour utiliser cette attaque, cette attaque ne fait rien.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Detective Pikachu",
		code: "det1"
	}
}

export default card
