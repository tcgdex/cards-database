import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-60",
	localId: 60,

	// Card informations
	name: {
		en: "Tentacool",
		fr: "Tentacool",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 72,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/60/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/60/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/60/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Wrap",
			fr: "Ligotage",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
