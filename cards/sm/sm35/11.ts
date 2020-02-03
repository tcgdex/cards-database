import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-11",
	localId: 11,

	// Card informations
	name: {
		en: "Torkoal",
		fr: "Chartor",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 324,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/11/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/11/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/11/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/11/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "High-Pressure Heat",
			fr: "Chaleur Sous Pression",
		},
		text: {
			en: "During your next turn, this Pokémon's High-Pressure Heat attack does 50 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l’attaque Chaleur Sous Pression de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes",
		},
		text: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card

