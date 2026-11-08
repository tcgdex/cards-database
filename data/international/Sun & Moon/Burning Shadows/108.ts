import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Bouffalant",
		'fr-fr': "Frison",
		'es-es': "Bouffalant",
		'it-it': "Bouffalant",
		'pt-br': "Bouffalant",
		'de-de': "Bisofank"
	},

	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		626,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bouffant Head",
				'fr-fr': "Tête Frisée",
				'es-es': "Cabeza Bouffant",
				'it-it': "Testasbuffo",
				'pt-br': "Cabeça Crespa",
				'de-de': "Bisokopf"
			},
			effect: {
				'en-us': "During your opponent’s next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Knock Over",
				'fr-fr': "Culbute",
				'es-es': "Tumbar",
				'it-it': "Sconvolgimento",
				'pt-br': "Arrebatar",
				'de-de': "Umwerfen"
			},
			effect: {
				'en-us': "You may discard any Stadium card in play.",
				'fr-fr': "Vous pouvez défausser toute carte Stade en jeu.",
				'es-es': "Puedes descartar cualquier carta de Estadio en juego.",
				'it-it': "Puoi scartare una carta Stadio in gioco.",
				'pt-br': "Você pode descartar qualquer carta de Estádio em jogo.",
				'de-de': "Du kannst 1 beliebige Stadionkarte im Spiel auf den Ablagestapel legen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "They charge wildly and headbutt everything. Their headbutts have enough destructive force to derail a train.",
	},

	thirdParty: {
		cardmarket: 299509,
		tcgplayer: 138604
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
