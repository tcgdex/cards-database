import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-16",
	localId: 16,

	// Card informations
	name: {
		en: "Sawsbuck",
		fr: "Haydaim",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 586,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/16/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/16/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/16/high",
		},
	},

	evolveFrom: {
		en: "Deerling",
		fr: "Vivaldaim",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Push Down",
			fr: "Renversement",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
			fr: "Bélier",
		},
		text: {
			en: "This Pokémon does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige 20 dégâts.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
