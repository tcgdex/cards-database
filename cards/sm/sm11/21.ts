import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-21",
	localId: 21,

	// Card informations
	name: {
		en: "Magmar",
		fr: "Magmar",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 126,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/21/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/21/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/21/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 139,
		name: "Hiroki Asanuma"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Smoke Bomb",
			fr: "Bombe Fumante",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack doesn't happen.",
			fr: "Si le Pokémon Défenseur essaie d’attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, l’attaque n’est pas lancée.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
