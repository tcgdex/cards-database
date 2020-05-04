import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-33",
	localId: 33,

	// Card informations
	name: {
		en: "Cryogonal",
		fr: "Hexagel",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 615,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/33/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/33/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/33/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Ice Chain",
			fr: "Chaîne de Glace",
		},
		text: {
			en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon.",
			fr: "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Frost Vanish",
			fr: "Poudreuse d'Escampette",
		},
		text: {
			en: "You may return this Pokémon and all cards attached to it to your hand.",
			fr: "Vous pouvez reprendre ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
