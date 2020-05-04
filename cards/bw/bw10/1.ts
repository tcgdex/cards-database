import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-1",
	localId: 1,

	// Card informations
	name: {
		en: "Surskit",
		fr: "Arakdo",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 283,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/1/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/1/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/1/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sweet Scent",
			fr: "Doux Parfum",
		},
		text: {
			en: "Heal 20 damage from 1 of your Pokémon.",
			fr: "Soignez 20 dégâts à 1 de vos Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
