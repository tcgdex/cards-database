import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-25",
	localId: 25,

	// Card informations
	name: {
		en: "Crawdaunt",
		fr: "Colhomard",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 342,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/25/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/25/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/25/high",
		},
	},

	evolveFrom: {
		en: "Corphish",
		fr: "Écrapince",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Double Claws",
			fr: "Doubles Griffes",
		},
		text: {
			en: "Discard 2 Energy from your opponent's Active Pokémon.",
			fr: "Défaussez 2 Énergies du Pokémon Actif de votre adversaire.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
