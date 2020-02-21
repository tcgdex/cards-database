import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-37",
	localId: 37,

	// Card informations
	name: {
		en: "Swanna",
		fr: "Lakmécygne",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 581,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/37/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/37/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/37/high",
		},
	},

	evolveFrom: {
		en: "Ducklett",
		fr: "Couaneton",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Feather Dance",
			fr: "Danse-Plume",
		},
		text: {
			en: "During your next turn, each of this Pokémon's attacks does 40 more damage(before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, chaque attaque de ce Pokémon inflige 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Ring",
			fr: "Anneau Hydro",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
		},
		damage: 40
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
