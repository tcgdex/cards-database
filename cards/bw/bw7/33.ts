import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-33",
	localId: 33,

	// Card informations
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 54,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/33/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/33/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/33/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Firefighting",
			fr: "Anti-Flammes",
		},
		text: {
			en: "Discard a Fire Energy attached to the Defending Pokémon.",
			fr: "Défaussez une Énergie Fire attachée au Pokémon Défenseur.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
