import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [871],
	set: Set,

	name: {
		'fr-fr': "Wattapik",
		'en-us': "Pincurchin",
		'es-es': "Pincurchin",
		'it-it': "Pincurchin",
		'pt-br': "Pincurchin",
		'de-de': "Britzigel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			'fr-fr': "Écrasement Piquant",
			'en-us': "Needle Crush",
			'es-es': "Aplastamiento de Agujas",
			'it-it': "Agodistruzione",
			'pt-br': "Espinho Esmagador",
			'de-de': "Schmetternadel"
		},

		effect: {
			'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'en-us': "Discard an Energy from your opponent's Active Pokémon.",
			'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Descarte uma Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715547,
				tcgplayer: 497483,
				cardtrader: 248697
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715547,
				tcgplayer: 497483,
				cardtrader: 248697
			}
		},
	],

	illustrator: "Yuka Morii",

	description: {
		'en-us': "This Pokémon generates electricity when it digests food. It uses its five hard teeth to scrape seaweed off surfaces and eat it.",
	},
}

export default card
