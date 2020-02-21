import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-67",
	localId: 67,

	// Card informations
	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 185,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/67/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/67/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Watch and Learn",
			fr: "Apprentissage",
		},
		text: {
			en: "If your opponent's Pokémon used an attack during his or her last turn, use it as this attack.",
			fr: "Si l'un des Pokémon de votre adversaire a utilisé une attaque pendant son dernier tour, utilisez-la en tant que cette attaque.",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
