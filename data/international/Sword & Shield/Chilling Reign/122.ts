import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [352],
	set: Set,

	name: {
		'en-us': "Kecleon",
		'fr-fr': "Kecleon",
		'es-es': "Kecleon",
		'it-it': "Kecleon",
		'pt-br': "Kecleon",
		'de-de': "Kecleon"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Chromashift",
			'fr-fr': "Chromutation",
			'es-es': "Cambio Cromático",
			'it-it': "Mutacolore",
			'pt-br': "Transmutação Cromática",
			'de-de': "Chromawechsel"
		},

		effect: {
			'en-us': "This Pokémon is the same type as any basic Energy attached to it. (If it has 2 or more different types of basic Energy attached, this Pokémon is each of those types.)",
			'fr-fr': "Ce Pokémon est du même type que l'Énergie de base qui lui est attachée. (Si de l'Énergie de base de 2 types différents ou plus est attachée à ce Pokémon, ce Pokémon est de chacun de ces types.)",
			'es-es': "Este Pokémon es del mismo tipo que el de cualquier Energía Básica unida a él. (Si tiene 2 o más tipos de Energía Básica diferentes unidas a él, este Pokémon es de cada uno de esos tipos).",
			'it-it': "Questo Pokémon è dello stesso tipo di qualsiasi Energia base a esso assegnata. Se ha due o più Energie base di tipo diverso assegnate, questo Pokémon è di ciascuno di quei tipi.",
			'pt-br': "Este Pokémon é do mesmo tipo de qualquer Energia básica ligada a ele (se ele tiver 2 ou mais tipos diferentes de Energias básicas ligadas a ele, este Pokémon será de cada um destes tipos).",
			'de-de': "Dieses Pokémon ist vom selben Typ wie jede an es angelegte Basis-Energie. (Wenn 2 oder mehr verschiedene Typen von Basis-Energie angelegt sind, ist dieses Pokémon von jedem dieser Typen.)"
		}
	}],

	attacks: [{
		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante",
			'es-es': "Ataque Giratorio",
			'it-it': "Attacco Rotante",
			'pt-br': "Ataque Giratório",
			'de-de': "Rundumangriff"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Its color changes for concealment and also when its mood or health changes. The darker the color, the healthier it is."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567230,
				tcgplayer: 241801
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567230,
				tcgplayer: 241801
			}
		},
	],
}

export default card
