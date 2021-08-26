import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Naganadel GX",
		fr: "Mandrillon GX",
		es: "Naganadel GX",
		it: "Naganadel GX",
		pt: "Naganadel GX",
		de: "Agoyon GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
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
		en: "Poipole",
		fr: "Vémini",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Beast Raid",
				fr: "Raid Chimérique",
				es: "Incursión Ente",
				it: "Raid Creatura",
				pt: "Reide de Criaturas",
				de: "Bestien-Raubzug"
			},
			effect: {
				en: "This attack does 20 damage for each of your Ultra Beasts in play.",
				fr: "Cette attaque inflige 20 dégâts pour chacune de vos Ultra-Chimères en jeu.",
				es: "Este ataque hace 20 puntos de daño por cada uno de tus Ultraentes en juego.",
				it: "Questo attacco infligge 20 danni per ogni tua Ultracreatura in gioco.",
				pt: "Este ataque causa 20 pontos de dano para cada uma das suas Ultracriaturas em jogo.",
				de: "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl deiner Ultrabestien im Spiel zu."
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
				en: "Jet Needle",
				fr: "Gerbe d’Aiguilles",
				es: "Aguja Propulsión",
				it: "Agogetto",
				pt: "Jato de Grampos",
				de: "Jetnadel"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Weakness or Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				es: "El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Fraqueza ou Resistência.",
				de: "Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
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
				en: "Stinger GX",
				fr: "Aiguillon GX",
				es: "Aguijón GX",
				it: "Aculeus GX",
				pt: "Ferrão GX",
				de: "Stachel GX"
			},
			effect: {
				en: "Both players shuffle their Prize cards into their decks. Then, each player puts the top 3 cards of their deck face down as their Prize cards. (You can’t use more than 1 GX attack in a game.)",
				fr: "Les deux joueurs mélangent leurs cartes Récompense avec leurs decks. Ensuite, chaque joueur place les 3 cartes du dessus de son deck, face cachée, comme cartes Récompense. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Ambos jugadores ponen sus cartas de Premio en sus barajas y las barajan todas. Después, cada jugador pone las 3 primeras cartas de su baraja boca abajo como sus cartas de Premio. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Entrambi i giocatori rimischiano le loro carte Premio nel proprio mazzo. Poi ciascuno prende le prime tre carte del proprio mazzo e le mette a faccia in giù come carte Premio. Non puoi usare più di un attacco GX a partita.",
				pt: "Ambos os jogadores embaralham suas cartas de Prêmio nos seus baralhos. Em seguida, cada jogador coloca as 3 primeiras cartas dos seus baralhos, viradas para baixo, como suas cartas de Prêmio (você não pode usar mais de 1 ataque GX por partida).",
				de: "Beide Spieler mischen ihre Preiskarten in ihre Decks. Anschließend legt jeder Spieler die obersten 3 Karten seines Decks als seine verdeckten Preiskarten ab. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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



}

export default card
