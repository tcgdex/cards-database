import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY34",
	localId: "XY34",

	// Card informations
	name: {
		en: "Metagross-EX",
		fr: "Métalosse-EEX",
	},

	hp: 180,

	type: [
		Type.METAL,
	],

	dexId: 376,


	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "PLANETA",



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Magnetic Laser",
			fr: "Laser Magnétique",
		},
		text: {
			en: "You may move a Metal Energy from 1 of your Benched Pokémon to this Pokémon.",
			fr: "Vous pouvez déplacer une Énergie Metal de l'un de vos Pokémon de Banc vers ce Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Squared Attack",
			fr: "Attaque Carrée",
		},
		text: {
			en: "Flip 4 coins. This attack does 50 damage times the number of heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
