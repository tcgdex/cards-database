import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Krookodile",
		'fr-fr': "Crocorible",
		'es-es': "Krookodile",
		'it-it': "Krookodile",
		'pt-br': "Krookodile",
		'de-de': "Rabigator"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		553,
	],

	hp: 150,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Krokorok",
		'fr-fr': "Escroco",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "False Accusation",
				'fr-fr': "Fausse Accusation",
				'es-es': "Falsa Acusación",
				'it-it': "Accuse Infondate",
				'pt-br': "Acusação Falsa",
				'de-de': "Falsche Anschuldigung"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each card in your opponent’s hand.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque carte dans la main de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada carta en la mano de tu rival.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni carta che ha in mano il tuo avversario.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais para cada carta na mão do seu oponente.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der Karten auf der Hand deines Gegners zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Obsidian Fang",
				'fr-fr': "Croc d’Obsidienne",
				'es-es': "Colmillo de Obsidiana",
				'it-it': "Ossizanna",
				'pt-br': "Presa de Obsidiana",
				'de-de': "Schwarze Fänge"
			},
			effect: {
				'en-us': "Before doing damage, discard all Pokémon Tool cards from your opponent’s Active Pokémon.",
				'fr-fr': "Avant d’infliger des dégâts, défaussez toutes les cartes Outil Pokémon du Pokémon Actif de votre adversaire.",
				'es-es': "Antes de infligir daño, descarta todas las cartas de Herramienta Pokémon del Pokémon Activo de tu rival.",
				'it-it': "Prima di infliggere i danni, scarta tutte le carte Oggetto Pokémon assegnate al Pokémon attivo del tuo avversario.",
				'pt-br': "Antes de causar dano, descarte todas as cartas de Ferramenta Pokémon do Pokémon Ativo do seu oponente.",
				'de-de': "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its unique faculty of sight can detect small prey more than 30 miles away, even in the midst of a sandstorm.",
	},

	thirdParty: {
		cardmarket: 295396,
		tcgplayer: 126957
	}
}

export default card
