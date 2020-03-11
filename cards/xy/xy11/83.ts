import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-83",
	localId: 83,

	// Card informations
	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
	},

	hp: 120,

	type: [
		Type.DRAGON,
	],

	dexId: 621,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/83/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/83/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Proud Fang",
			fr: "Croc Orgueilleux",
		},
		text: {
			en: "If your opponent has any Pokémon BREAK in play, this attack does 60 more damage.",
			fr: "Si votre adversaire a un Pokémon TURBO en jeu, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Giga Claw",
			fr: "Giga Griffe",
		},
		text: {
			en: "Flip 2 coins. If both of them are tails, this attack does nothing.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés pile, cette attaque ne fait rien.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
