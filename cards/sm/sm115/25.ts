import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-25",
	localId: 25,

	// Card informations
	name: {
		en: "Ekans",
		fr: "Abo",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 23,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/25/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/25/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 46,
		name: "MAHOU"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Wrap",
			fr: "Ligotage",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
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
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
