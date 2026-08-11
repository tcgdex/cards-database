import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Absol",
		'fr-fr': "Absol",
		'es-es': "Absol",
		'es-mx': "Absol",
		'de-de': "Absol",
		'it-it': "Absol",
		'pt-br': "Absol"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [359],
	hp: 110,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Allure",
			'fr-fr': "Allure",
			'es-es': "Atractivo",
			'es-mx': "Atraer",
			'de-de': "Verlockung",
			'it-it': "Affascinante",
			'pt-br': "Fascinar"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'es-mx': "Roba 2 cartas.",
			'de-de': "Ziehe 2 Karten.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Dark Cutter",
			'fr-fr': "Tranch'Obscur",
			'es-es': "Cuchilla Oscura",
			'es-mx': "Corte Oscuro",
			'de-de': "Dunkler Zerschneider",
			'it-it': "Oscurotaglio",
			'pt-br': "Cortador de Escuridão"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "Because of this Pokémon's ability to detect danger, people mistook Absol as a bringer of doom.",
	},

	illustrator: "Takumi Wada",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857638,
				tcgplayer: 662125,
				cardtrader: 356847
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857638,
				tcgplayer: 662125,
				cardtrader: 356847
			}
		},
	],
}

export default card
