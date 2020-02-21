import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-39",
	localId: 39,

	// Card informations
	name: {
		en: "Snover",
		fr: "Blizzi",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 459,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/39/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/39/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/39/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Powder Snow",
			fr: "Poudreuse",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Smash",
			fr: "Double Broiement",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
