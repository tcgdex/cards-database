import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-33",
	localId: 33,

	// Card informations
	name: {
		en: "Squirtle",
		fr: "Carapuce",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 7,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/33/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/33/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/33/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 61,
		name: "tetsuya koizumi"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Bubble",
			fr: "Écume",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
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
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
