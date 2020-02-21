import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-4",
	localId: 4,

	// Card informations
	name: {
		en: "Heracross-EX",
		fr: "Scarhino-EX",
	},

	hp: 170,

	type: [
		Type.GRASS,
	],

	dexId: 214,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/4/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/4/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Guard Press",
			fr: "Pression de Garde",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 40
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Giga Power",
			fr: "Giga Pouvoir",
		},
		text: {
			en: "You may do 40 more damage. If you do, this Pokémon does 20 damage to itself.",
			fr: "Vous pouvez infliger 40 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
