import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-38",
	localId: 38,

	// Card informations
	name: {
		en: "Binacle",
		fr: "Opermine",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 688,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/38/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/38/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/38/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Sand Attack",
			fr: "Jet de Sable",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, son attaque ne fait rien.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Mud-Slap",
			fr: "Coud'Boue",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
