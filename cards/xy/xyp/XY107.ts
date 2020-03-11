import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY107",
	localId: "XY107",

	// Card informations
	name: {
		en: "Mewtwo-EX",
		fr: "Mewtwo-EX",
	},

	hp: 170,

	type: [
		Type.PSYCHIC,
	],

	dexId: 150,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY107/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY107/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY107/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Shatter Shot",
			fr: "Coup Fracassant",
		},
		text: {
			en: "This attack does 30 damage times the amount of Psychic Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d'Énergies Psychic attachées à ce Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			fr: "Change Dégâts",
		},
		text: {
			fr: "Échangez tous les marqueurs de dégâts de ce Pokémon avec ceux du Pokémon Actif de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
