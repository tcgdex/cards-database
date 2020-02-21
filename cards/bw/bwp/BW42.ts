import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW42",
	localId: "BW42",

	// Card informations
	name: {
		en: "Tornadus",
		fr: "Boréas",
	},

	hp: 110,

	type: [
		Type.COLORLESS,
	],

	dexId: 641,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW42/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW42/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW42/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Wheel",
			fr: "Roue d'Énergie",
		},
		text: {
			en: "Move an Energy from 1 of your Benched Pokémon to this Pokémon.",
			fr: "Déplacez une Énergie de l'un de vos Pokémon de Banc vers ce Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hurricane",
			fr: "Vent Violent",
		},
		text: {
			en: "Move a basic Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de base de ce Pokémon vers 1 de vos Pokémon de Banc.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
