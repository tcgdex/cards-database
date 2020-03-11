import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-6",
	localId: 6,

	// Card informations
	name: {
		en: "Cascoon",
		fr: "Blindalys",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 268,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/6/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/6/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/6/high",
		},
	},

	evolveFrom: {
		en: "Wurmple",
		fr: "Chenipotte",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "MAHOU",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Poison Sting",
			fr: "Dard-Venin",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Iron Defense",
			fr: "Mur de Fer",
		},
		text: {
			en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
