import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-30",
	localId: 30,

	// Card informations
	name: {
		en: "Kyurem-EX",
		fr: "Kyurem ex",
	},

	hp: 180,

	type: [
		Type.WATER,
	],

	dexId: 646,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/30/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/30/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/30/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Outrage",
			fr: "Colère",
		},
		text: {
			en: "Does 10 more damage for each damage counter on this Pokémon.",
			fr: "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giga Frost",
			fr: "Giga Givre",
		},
		text: {
			en: "Discard 2 Water Energy attached to this Pokémon.",
			fr: "Défaussez 2 Énergies Water attachées à ce Pokémon.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
