import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-29",
	localId: 29,

	// Card informations
	name: {
		en: "Dewgong",
		fr: "Lamantine",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 87,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/29/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/29/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/29/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/29/high.png",
		},
	},

	evolveFrom: {
		en: "Seel",
		fr: "Otaria",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Super Deep Dive",
			fr: "Super Gros Plongeon",
		},
		text: {
			en: "Heal 40 damage from this Pokémon. Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Soignez 40 dégâts à ce Pokémon. Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
			fr: "Bélier",
		},
		text: {
			en: "This Pokémon does 20 damage to itself.",
			fr: "Ce Pokémon s’inflige 20 dégâts.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card

