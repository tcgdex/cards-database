import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW68",
	localId: "BW68",

	// Card informations
	name: {
		en: "Meloetta",
		fr: "Meloetta",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 648,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW68/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW68/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Sing",
			fr: "Berceuse",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psyburn",
			fr: "Brûlure Psy",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
