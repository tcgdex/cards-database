import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Naganadel GX",
		'fr-fr': "Mandrillon GX",
		'es-es': "Naganadel GX",
		'it-it': "Naganadel GX",
		'pt-br': "Naganadel GX",
		'de-de': "Agoyon GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		804,
	],

	hp: 210,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Poipole",
		'fr-fr': "Vémini",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Beast Raid",
				'fr-fr': "Raid Chimérique",
				'es-es': "Incursión Ente",
				'it-it': "Raid Creatura",
				'pt-br': "Reide de Criaturas",
				'de-de': "Bestien-Raubzug"
			},
			effect: {
				'en-us': "This attack does 20 damage for each of your Ultra Beasts in play.",
				'fr-fr': "Cette attaque inflige 20 dégâts pour chacune de vos Ultra-Chimères en jeu.",
				'es-es': "Este ataque hace 20 puntos de daño por cada uno de tus Ultraentes en juego.",
				'it-it': "Questo attacco infligge 20 danni per ogni tua Ultracreatura in gioco.",
				'pt-br': "Este ataque causa 20 pontos de dano para cada uma das suas Ultracriaturas em jogo.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl deiner Ultrabestien im Spiel zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Jet Needle",
				'fr-fr': "Gerbe d’Aiguilles",
				'es-es': "Aguja Propulsión",
				'it-it': "Agogetto",
				'pt-br': "Jato de Grampos",
				'de-de': "Jetnadel"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Weakness or Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
				'pt-br': "O dano deste ataque não é afetado por Fraqueza ou Resistência.",
				'de-de': "Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
			},
			damage: 110,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stinger GX",
				'fr-fr': "Aiguillon GX",
				'es-es': "Aguijón GX",
				'it-it': "Aculeus-GX",
				'pt-br': "Ferrão GX",
				'de-de': "Stachel GX"
			},
			effect: {
				'en-us': "Both players shuffle their Prize cards into their decks. Then, each player puts the top 3 cards of their deck face down as their Prize cards. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Les deux joueurs mélangent leurs cartes Récompense avec leurs decks. Ensuite, chaque joueur place les 3 cartes du dessus de son deck, face cachée, comme cartes Récompense. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Ambos jugadores ponen sus cartas de Premio en sus barajas y las barajan todas. Después, cada jugador pone las 3 primeras cartas de su baraja boca abajo como sus cartas de Premio. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Entrambi i giocatori rimischiano le loro carte Premio nel proprio mazzo. Poi ciascuno prende le prime tre carte del proprio mazzo e le mette a faccia in giù come carte Premio. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Ambos os jogadores embaralham suas cartas de Prêmio nos seus baralhos. Em seguida, cada jogador coloca as 3 primeiras cartas dos seus baralhos, viradas para baixo, como suas cartas de Prêmio (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Beide Spieler mischen ihre Preiskarten in ihre Decks. Anschließend legt jeder Spieler die obersten 3 Karten seines Decks als seine verdeckten Preiskarten ab. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 319907,
		tcgplayer: 165706
	}
}

export default card
