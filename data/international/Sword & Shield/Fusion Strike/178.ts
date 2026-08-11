import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [861],
	set: Set,

	name: {
		'en-us': "Grimmsnarl",
		'fr-fr': "Angoliath",
		'es-es': "Grimmsnarl",
		'it-it': "Grimmsnarl",
		'pt-br': "Grimmsnarl",
		'de-de': "Olangaar"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Morgrem",
		'fr-fr': "Fourbelin",
		'es-es': "Morgrem",
		'it-it': "Morgrem",
		'pt-br': "Morgrem",
		'de-de': "Pelzebub"
	},

	stage: "Stage2",
	retreat: 3,
	regulationMark: "E",
	illustrator: "kawayoo",

	description: {
		'en-us': "Its hairs work like muscle fibers. When its hairs unfurl, they latch on to opponents, ensnaring them as tentacles would."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'de-de': "Biss",
			'pt-br': "Mordida"
		},

		damage: 60
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Rear Attack",
			'fr-fr': "Attaque Arrière",
			'es-es': "Ataque por la Retaguardia",
			'it-it': "Retroattacco",
			'de-de': "Rückenstärkung",
			'pt-br': "Retaguarda"
		},

		damage: "100+",

		effect: {
			'en-us': "If you have 2 or fewer Benched Pokémon, this attack does 140 more damage.",
			'fr-fr': "Si vous avez 2 Pokémon de Banc ou moins, cette attaque inflige 140 dégâts supplémentaires.",
			'es-es': "Si tienes 2 o menos Pokémon en Banca, este ataque hace 140 puntos de daño más.",
			'it-it': "Se hai due o meno Pokémon in panchina, questo attacco infligge 140 danni in più.",
			'de-de': "Wenn du 2 oder weniger Pokémon auf deiner Bank hast, fügt diese Attacke 140 Schadenspunkte mehr zu.",
			'pt-br': "Se você tiver 2 ou menos Pokémon no seu Banco, este ataque causará 140 pontos de dano a mais."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582806,
				tcgplayer: 253392
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582806,
				tcgplayer: 253392
			}
		},
	],
}

export default card
