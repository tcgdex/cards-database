import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-114",
	localId: 114,

	// Card informations
	name: {
		en: "Oranguru",
		fr: "Gouroutan",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 765,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/114/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/114/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/114/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Resource Management",
			fr: "Gestion des Ressources",
		},
		text: {
			en: "Put 3 cards from your discard pile on the bottom of your deck in any order.",
			fr: "Placez 3 cartes de votre pile de défausse en dessous de votre deck dans l’ordre de votre choix.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Profound Knowledge",
			fr: "Connaissance Profonde",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
