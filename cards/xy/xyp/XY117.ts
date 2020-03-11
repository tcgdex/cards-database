import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY117",
	localId: "XY117",

	// Card informations
	name: {
		en: "Victini",
		fr: "Victini",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 494,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY117/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY117/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY117/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY117/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Assist",
			fr: "Assistance Énergétique",
		},
		text: {
			en: "Flip a coin. If heads, attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Lancez une pièce. Si c'est face, attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Victory Ball",
			fr: "Balle Victoire",
		},
		text: {
			en: "Discard a Fire Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie Fire attachée à ce Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
