import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-23",
	localId: 23,

	// Card informations
	name: {
		en: "Tentacool",
		fr: "Tentacool",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 72,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/23/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/23/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/23/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 132,
		name: "Shibuzoh."
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sludge Shock",
			fr: "Choc Détritus",
		},
		text: {
			en: "The Defending Pokémon can't be healed during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas être soigné pendant le prochain tour de votre adversaire.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
