import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-60",
	localId: 60,

	// Card informations
	name: {
		en: "Machamp BREAK",
		fr: "Mackogneur TURBO",
	},

	hp: 190,

	type: [
		Type.FIGHTING,
	],

	dexId: 68,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/60/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/60/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/60/high",
		},
	},

	evolveFrom: {
		en: "Machamp",
		fr: "Mackogneur",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Boomerang Lariat",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "During your next turn, this Pokémon's attacks do 100 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
		},
		damage: 100
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			fr: "Lasso Boomerang",
		},
		text: {
			fr: "Pendant votre prochain tour, les attaques de ce Pokémon infligent 100 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 100
	}],







	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
