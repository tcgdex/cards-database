import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy6/38/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/38/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/38/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/38/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card

