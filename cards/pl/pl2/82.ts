import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-82",
	localId: 82,

	// Card informations
	name: {
		en: "Spheal",
		fr: "Obalie Niv. 18",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 363,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/82/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/82/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Powder Snow",
			fr: "Poudreuse",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ice Ball",
			fr: "Ball'glace",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
