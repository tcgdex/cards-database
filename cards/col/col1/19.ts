import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-19",
	localId: 19,

	// Card informations
	name: {
		en: "Palkia",
		fr: "Palkia",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 484,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/19/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/19/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/19/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Daisuke Iwamoto",



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Wormhole",
			fr: "Trou de ver",
		},
		text: {
			en: "Switch Palkia with 1 of your Benched Pokémon. Then, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Échangez Palkia avec l’un des Pokémon de votre Banc. Ensuite, votre adversaire échange le Pokémon Défenseur avec l’un de ses Pokémon de Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
