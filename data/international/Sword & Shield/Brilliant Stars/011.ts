import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [414],
	set: Set,

	name: {
		'en-us': "Mothim",
		'fr-fr': "Papilord",
		'es-es': "Mothim",
		'it-it': "Mothim",
		'pt-br': "Mothim",
		'de-de': "Moterpel"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Burmy",
		'fr-fr': "Cheniti",
		'es-es': "Burmy",
		'it-it': "Burmy",
		'pt-br': "Burmy",
		'de-de': "Burmy"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Raid",
			'fr-fr': "Razzia Obscure",
			'es-es': "Raid Oscuro",
			'it-it': "Raid",
			'pt-br': "Reide",
			'de-de': "Überfall"
		},

		effect: {
			'en-us': "If this Pokémon evolved from Burmy during this turn, this attack does 90 more damage.",
			'fr-fr': "Si ce Pokémon a évolué de Cheniti pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si este Pokémon ha evolucionado de Burmy durante este turno, este ataque hace 90 puntos de daño más.",
			'it-it': "Se questo Pokémon si è evoluto da Burmy durante questo turno, questo attacco infligge 90 danni in più.",
			'pt-br': "Se este Pokémon evoluiu de Burmy durante este turno, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn sich dieses Pokémon während dieses Zuges aus Burmy entwickelt hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Gust",
			'fr-fr': "Tornade",
			'es-es': "Tornado",
			'it-it': "Raffica",
			'pt-br': "Lufada de Vento",
			'de-de': "Windstoß"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	regulationMark: "F",


	description: {
		'en-us': "It flutters around at night and steals honey from the Combee hive.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608435,
				tcgplayer: 263605
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608435,
				tcgplayer: 263605
			}
		},
	],
}

export default card
