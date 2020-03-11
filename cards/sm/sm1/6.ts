import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-6",
	localId: 6,

	// Card informations
	name: {
		en: "Pinsir",
		fr: "Scarabrute",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 127,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/6/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/6/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/6/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "DemizuPosuka",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Roof Fling",
			fr: "Lance Auvent",
		},
		text: {
			en: "Flip a coin. If heads, put your opponent's Active Pokémon and all cards attached to it into your opponent's hand.",
			fr: "Lancez une pièce. Si c'est face, placez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées dans la main de votre adversaire.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Guillotine",
			fr: "Guillotine",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
