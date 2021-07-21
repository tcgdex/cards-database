import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Suicune-GX",
		fr: "Suicune-GX",
		es: "Suicune-GX",
		it: "Suicune-GX",
		pt: "Suicune-GX",
		de: "Suicune-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		245,
	],
	hp: 180,
	types: [
		"Water",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Phantom Winds",
				fr: "Vent Spectral",
				es: "Vientos Etéreos",
				it: "Vento Evanescente",
				pt: "Ventos Etéreos",
				de: "Phantomwinde"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may shuffle it and all cards attached to it into your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez le mélanger, ainsi que toutes les cartes qui lui sont attachées, avec votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu Banca, puedes poner este Pokémon y todas las cartas unidas a él en tu baraja y barajarlas todas.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è nella tua panchina, puoi rimischiare questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon estiver no seu Banco, você poderá embaralhar ele e todas as cartas ligadas a ele no seu baralho.",
				de: "Einmal während deines Zuges (bevor du angreifst), wenn sich dieses Pokémon auf deiner Bank befindet, kannst du es und alle an es angelegten Karten in dein Deck mischen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Cure Stream",
				fr: "Ruisseau Guérisseur",
				es: "Arroyo Curativo",
				it: "Flusso Curativo",
				pt: "Fluxo de Cura",
				de: "Heilfluss"
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon’s attacks do 30 less damage (before applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, os ataques do Pokémon Defensor causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 120,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Brinicles GX",
				fr: "Brinicles GX",
				es: "Estalactita Oceánica GX",
				it: "Ghiacci Salmastri-GX",
				pt: "Estalactite de Gelo GX",
				de: "Eisfinger GX"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Cambia este Pokémon por 1 de tus Pokémon en Banca. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Scambia questo Pokémon con uno della tua panchina. Non puoi usare più di un attacco GX a partita.",
				pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco (você não pode usar mais de 1 ataque GX por partida).",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
