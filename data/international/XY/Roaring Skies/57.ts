import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Salamence",
		'fr-fr': "Drattak",
		'es-es': "Salamence",
		'it-it': "Salamence",
		'pt-br': "Salamence",
		'de-de': "Brutalanda"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		373,
	],

	hp: 160,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Shelgon",
		'fr-fr': "Drackhaus",
		'es-es': "Shelgon",
		'it-it': "Shelgon",
		'pt-br': "Shelgon",
		'de-de': "Draschel"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Shatter",
				'fr-fr': "Fracas",
				'es-es': "Fragmentar",
				'it-it': "Frantumare",
				'pt-br': "Estilhaçar",
				'de-de': "Zertrümmern"
			},
			effect: {
				'en-us': "Discard any Stadium card in play.",
				'fr-fr': "Défaussez toute carte Stade en jeu.",
				'es-es': "Descarta cualquier carta de Estadio en juego.",
				'it-it': "Scarta una carta Stadio in gioco.",
				'pt-br': "Descarte qualquer card de Estádio em jogo.",
				'de-de': "Lege eine beliebige Stadionkarte aus dem Spiel auf den Ablagestapel."
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Howl",
				'fr-fr': "Hurlement Puissant",
				'es-es': "Aullido Poderoso",
				'it-it': "Fortegrido",
				'pt-br': "Uivo do Poder",
				'de-de': "Machtgeheul"
			},
			effect: {
				'en-us': "This attack does 20 damage times the number of cards in your opponent's hand.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre de cartes dans la main de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño por cada carta en la mano de tu rival.",
				'it-it': "Questo attacco infligge 20 danni per ogni carta che ha in mano il tuo avversario.",
				'pt-br': "Este ataque causa 20 de danos vezes o número de cards na mão do seu oponente.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der Karten auf der Hand deines Gegners zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Steam Blast",
				'fr-fr': "Geyser de Vapeur",
				'es-es': "Explosión Vapor",
				'it-it': "Sbuffo di Vapore",
				'pt-br': "Explosão de Vapor",
				'de-de': "Dampfstrahl"
			},
			effect: {
				'en-us': "Discard 3 Energy attached to this Pokémon.",
				'fr-fr': "Défaussez 3 Énergies attachées à ce Pokémon.",
				'es-es': "Descarta 3 Energías unidas a este Pokémon.",
				'it-it': "Scarta tre Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte 3 Energias ligadas a este Pokémon.",
				'de-de': "Lege 3 an dieses Pokémon angelegte Energien auf deinen Ablagestapel."
			},
			damage: 170,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It's uncontrollable if enraged. It flies around spouting flames and scorching fields and mountains.",
	},

	thirdParty: {
		cardmarket: 282725,
		tcgplayer: 98093
	}
}

export default card
