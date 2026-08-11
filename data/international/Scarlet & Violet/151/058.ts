import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [58],
	set: Set,

	name: {
		'fr-fr': "Caninos",
		'en-us': "Growlithe",
		'es-es': "Growlithe",
		'it-it': "Growlithe",
		'pt-br': "Growlithe",
		'de-de': "Fukano"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Évaporation",
			'en-us': "Vaporize",
			'es-es': "Vaporizar",
			'it-it': "Vaporizzare",
			'pt-br': "Evaporar",
			'de-de': "Vaporisieren"
		},

		effect: {
			'fr-fr': "Défaussez une Énergie {W} du Pokémon Actif de votre adversaire.",
			'en-us': "Discard a {W} Energy from your opponent's Active Pokémon.",
			'es-es': "Descarta 1 Energía {W} del Pokémon Activo de tu rival.",
			'it-it': "Scarta un'Energia {W} dal Pokémon attivo del tuo avversario.",
			'pt-br': "Descarte uma Energia {W} do Pokémon Ativo do seu oponente.",
			'de-de': "Lege 1 {W}-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733653,
				tcgplayer: 516247,
				cardtrader: 261122
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733653,
				tcgplayer: 516247,
				cardtrader: 261122
			}
		},
	],

	illustrator: "Atsushi Furusawa",

	
}

export default card
