import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [942],
	set: Set,

	name: {
		'fr-fr': "Grondogue",
		'en-us': "Maschiff",
		'es-es': "Maschiff",
		'it-it': "Maschiff",
		'pt-br': "Maschiff",
		'de-de': "Mobtiff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Coud'Pattes",
			'en-us': "Smash Kick",
			'es-es': "Patada Destrucción",
			'it-it': "Calcio Esplosivo",
			'pt-br': "Chute Poderoso",
			'de-de': "Schmetterkick"
		},

		damage: 20
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Croc Aiguisé",
			'en-us': "Sharp Fang",
			'es-es': "Colmillo Afilado",
			'it-it': "Zannaffilata",
			'pt-br': "Presa Afiada",
			'de-de': "Scharfe Fänge"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715617,
				tcgplayer: 497650,
				cardtrader: 248781
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715617,
				tcgplayer: 497650,
				cardtrader: 248781
			}
		},
	],

	illustrator: "Shibuzoh.",

	description: {
		'en-us': "It always scowls in an attempt to make opponents take it seriously, but even crying children will burst into laughter when they see Maschiff's face.",
	},
}

export default card
