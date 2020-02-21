import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-4",
	localId: 4,

	// Card informations
	name: {
		en: "Torchic",
		fr: "Poussifeu",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 255,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/4/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/4/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Singe",
			fr: "Roussi",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
