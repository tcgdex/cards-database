import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-105",
	localId: 105,

	// Card informations
	name: {
		en: "Cubone",
		fr: "Osselait",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 104,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/105/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/105/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/105/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "otumami",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Growl",
			fr: "Rugissement",
		},
		text: {
			en: "During your opponent's next turn, the Defending Pokémon's attacks do 20 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bonemerang",
			fr: "Osmerang",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
