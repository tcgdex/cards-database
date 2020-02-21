import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY118",
	localId: "XY118",

	// Card informations
	name: {
		en: "Keldeo",
		fr: "Keldeo",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 647,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY118/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY118/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY118/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY118/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

	abilities: [{
		id: 116,
		type: AbilityType.TALENT,
		name: {
			en: "Justified",
			fr: "Cœur Noble",
		},
		text: {
			en: "This Pokémon's attacks do 50 more damage to your opponent's Darkness Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de ce Pokémon infligent 50 dégâts supplémentaires aux Pokémon Darkness de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Sacred Sword",
			fr: "Lame Sainte",
		},
		text: {
			en: "This Pokémon can't use Sacred Sword during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Lame Sainte pendant votre prochain tour.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
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
