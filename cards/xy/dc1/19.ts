import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-19",
	localId: 19,

	// Card informations
	name: {
		en: "Team Magma's Mightyena",
		fr: "Grahyèna de la Team Magma",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 262,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/19/low",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/19/high",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/19/high",
		},
	},

	evolveFrom: {
		en: "Team Magma's Poochyena",
		fr: "Medhyèna de la Team Magma",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Hostile Fang",
			fr: "Croc Hostile",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Team Aqua Pokémon, this attack does 40 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de la Team Aqua, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card
