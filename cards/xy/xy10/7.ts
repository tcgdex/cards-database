import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-7",
	localId: 7,

	// Card informations
	name: {
		en: "Serperior",
		fr: "Majaspic",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 497,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/7/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/7/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/7/high",
		},
	},

	evolveFrom: {
		en: "Servine",
		fr: "Lianaja",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 70,
		name: "You Iribi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Coil",
			fr: "Enroulement",
		},
		text: {
			en: "During your next turn, this Pokémon's attacks do 60 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, les attaques de ce Pokémon infligent 60 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 40
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Slashing Strike",
			fr: "Coup Déchirant",
		},
		text: {
			en: "This Pokémon can't use Slashing Strike during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
