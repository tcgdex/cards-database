import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-77",
	localId: 77,

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
			en: "https://assets.tcgdex.net/en/bw/bw7/77/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/77/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/77/high",
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
			Type.PSYCHIC
		],
		name: {
			en: "Psychic",
			fr: "Psyko",
		},
		text: {
			en: "Does 20 more damage for each Energy attached to the Defending Pokémon.",
			fr: "Inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Echoed Voice",
			fr: "Écho",
		},
		text: {
			en: "During your next turn, this Pokémon's Echoed Voice attack does 50 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l'attaque Écho de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
