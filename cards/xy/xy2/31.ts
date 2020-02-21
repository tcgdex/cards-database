import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-31",
	localId: 31,

	// Card informations
	name: {
		en: "Avalugg",
		fr: "Séracrawl",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 713,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/31/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/31/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/31/high",
		},
	},

	evolveFrom: {
		en: "Bergmite",
		fr: "Grelaçon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Frost Barrier",
			fr: "Barrière de Givre",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shatter",
			fr: "Fracas",
		},
		text: {
			en: "Discard any Stadium card in play.",
			fr: "Défaussez toute carte Stade en jeu.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
