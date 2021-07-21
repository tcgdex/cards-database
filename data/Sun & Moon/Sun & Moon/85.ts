import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Krookodile",
		fr: "Crocorible",
		es: "Krookodile",
		it: "Krookodile",
		pt: "Krookodile",
		de: "Rabigator"
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
		en: "Krokorok",
		fr: "Escroco",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "False Accusation",
				fr: "Fausse Accusation",
				es: "Falsa Acusación",
				it: "Accuse Infondate",
				pt: "Acusação Falsa",
				de: "Falsche Anschuldigung"
			},
			effect: {
				en: "This attack does 20 more damage for each card in your opponent’s hand.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque carte dans la main de votre adversaire.",
				es: "Este ataque hace 20 puntos de daño más por cada carta en la mano de tu rival.",
				it: "Questo attacco infligge 20 danni in più per ogni carta che ha in mano il tuo avversario.",
				pt: "Este ataque causa 20 pontos de dano a mais para cada carta na mão do seu oponente.",
				de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der Karten auf der Hand deines Gegners zu."
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
				en: "Obsidian Fang",
				fr: "Croc d’Obsidienne",
				es: "Colmillo de Obsidiana",
				it: "Ossizanna",
				pt: "Presa de Obsidiana",
				de: "Schwarze Fänge"
			},
			effect: {
				en: "Before doing damage, discard all Pokémon Tool cards from your opponent’s Active Pokémon.",
				fr: "Avant d’infliger des dégâts, défaussez toutes les cartes Outil Pokémon du Pokémon Actif de votre adversaire.",
				es: "Antes de infligir daño, descarta todas las cartas de Herramienta Pokémon del Pokémon Activo de tu rival.",
				it: "Prima di infliggere i danni, scarta tutte le carte Oggetto Pokémon assegnate al Pokémon attivo del tuo avversario.",
				pt: "Antes de causar dano, descarte todas as cartas de Ferramenta Pokémon do Pokémon Ativo do seu oponente.",
				de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
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



}

export default card
