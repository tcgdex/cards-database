import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-6",
	localId: 6,

	// Card informations
	name: {
		en: "Kricketune",
		fr: "Mélokrik",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 402,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/6/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/6/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/6/high",
		},
	},

	evolveFrom: {
		en: "Kricketot",
		fr: "Crikzik",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Screech",
			fr: "Grincement",
		},
		text: {
			en: "During your next turn, any damage done to the Defending Pokémon by attacks is increased by 60 (after applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, tous les dégâts infligés au Pokémon Défenseur par des attaques sont augmentés de 60 (après application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
