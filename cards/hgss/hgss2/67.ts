import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-67",
	localId: 67,

	// Card informations
	name: {
		en: "Turtwig",
		fr: "Tortipouss",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 387,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/67/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/67/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Leech Seed",
			fr: "Vampigraine",
		},
		text: {
			en: "If this attack does any damage to the Defending Pokémon (after applying Weakness and Resistance), remove 1 damage counter from Turtwig.",
			fr: "Si cette attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), retirez 1 marqueur de dégât à Tortipouss.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
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

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
