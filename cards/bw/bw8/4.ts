import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-4",
	localId: 4,

	// Card informations
	name: {
		en: "Combee",
		fr: "Apitrini",
	},

	hp: 30,

	type: [
		Type.GRASS,
	],

	dexId: 415,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/4/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/4/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sting Missile",
			fr: "Dard-Missile",
		},
		text: {
			en: "Shuffle this Pokémon and all cards attached to it into your deck.",
			fr: "Mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
