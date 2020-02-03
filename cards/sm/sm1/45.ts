import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-45",
	localId: 45,

	// Card informations
	name: {
		en: "Dewpider",
		fr: "Araqua",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 751,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/45/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/45/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/45/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/45/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
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
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

