import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-7",
	localId: 7,

	// Card informations
	name: {
		en: "Shelmet",
		fr: "Escargaume",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 616,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/7/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/7/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/7/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Yawn",
			fr: "Bâillement",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
