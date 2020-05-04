import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-12",
	localId: 12,

	// Card informations
	name: {
		en: "Chesnaught BREAK",
		fr: "Blindépique TURBO",
	},

	hp: 190,

	type: [
		Type.GRASS,
	],

	dexId: 652,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/12/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/12/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/12/high",
		},
	},

	evolveFrom: {
		en: "Chesnaught",
		fr: "Blindépique",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tough Hammer",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "This Pokémon does 30 damage to itself. This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 160
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Marteau Solide",
		},
		text: {
			fr: "Ce Pokémon s'inflige 30 dégâts. Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 160
	}],







	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
