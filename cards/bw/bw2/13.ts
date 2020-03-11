import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-13",
	localId: 13,

	// Card informations
	name: {
		en: "Petilil",
		fr: "Chlorobule",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 548,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/13/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/13/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/13/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Stun Spore",
			fr: "Para-Spore",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Cut",
			fr: "Coupe",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
