import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Flygon",
		'fr-fr': "Libégon",
		'es-es': "Flygon",
		'it-it': "Flygon",
		'pt-br': "Flygon",
		'de-de': "Libelldra"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		330,
	],

	hp: 140,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Vibrava",
		'fr-fr': "Vibraninf",
		'es-es': "Vibrava",
		'it-it': "Vibrava",
		'pt-br': "Vibrava",
		'de-de': "Vibrava"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sand Flap",
				'fr-fr': "Battement Ensablé",
				'es-es': "Aleteo de Arena",
				'it-it': "Silicobattito",
				'pt-br': "Asa de Areia",
				'de-de': "Sandflattern"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may choose either player. That player shuffles his or her hand into his or her deck and draws 4 cards.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez choisir l'un des joueurs. Le joueur choisi mélange sa main avec son deck et pioche 4 cartes.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes elegir a cualquier jugador. Ese jugador baraja las cartas de su mano en su baraja y roba 4 cartas.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi scegliere uno dei giocatori. Quel giocatore rimischia le carte che ha in mano nel proprio mazzo e poi pesca quattro carte.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode escolher qualquer jogador. Esse jogador embaralha a mão no próprio deck e compra 4 cards.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff), kannst du einen Spieler auswählen. Dieser Spieler mischt seine Hand zurück in sein Deck und zieht 4 Karten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Sand Tomb",
				'fr-fr': "Tourbi-Sable",
				'es-es': "Bucle Arena",
				'it-it': "Sabbiotomba",
				'pt-br': "Fosso de Areia",
				'de-de': "Sandgrab"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Known as \"The Desert Spirit,\" this Pokémon hides in the sandstorms it causes by beating its wings.",
	},

	thirdParty: {
		cardmarket: 273641,
		tcgplayer: 96008
	}
}

export default card
