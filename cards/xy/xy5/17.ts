import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-17",
	localId: 17,

	// Card informations
	name: {
		en: "Volbeat",
		fr: "Muciole",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 313,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/17/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/17/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/17/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Acrobatics",
			fr: "Acrobatie",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pester",
			fr: "Tarabustage",
		},
		text: {
			en: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 30 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
