import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Flygon",
		fr: "Libégon",
		es: "Flygon",
		it: "Flygon",
		pt: "Flygon",
		de: "Libelldra"
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
		en: "Vibrava",
		fr: "Vibraninf",
		es: "Vibrava",
		it: "Vibrava",
		pt: "Vibrava",
		de: "Vibrava"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sand Flap",
				fr: "Battement Ensablé",
				es: "Aleteo de Arena",
				it: "Silicobattito",
				pt: "Asa de Areia",
				de: "Sandflattern"
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose either player. That player shuffles his or her hand into his or her deck and draws 4 cards.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez choisir l'un des joueurs. Le joueur choisi mélange sa main avec son deck et pioche 4 cartes.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes elegir a cualquier jugador. Ese jugador baraja las cartas de su mano en su baraja y roba 4 cartas.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scegliere uno dei giocatori. Quel giocatore rimischia le carte che ha in mano nel proprio mazzo e poi pesca quattro carte.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode escolher qualquer jogador. Esse jogador embaralha a mão no próprio deck e compra 4 cards.",
				de: "Einmal während deines Zuges (vor deinem Angriff), kannst du einen Spieler auswählen. Dieser Spieler mischt seine Hand zurück in sein Deck und zieht 4 Karten."
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
				en: "Sand Tomb",
				fr: "Tourbi-Sable",
				es: "Bucle Arena",
				it: "Sabbiotomba",
				pt: "Fosso de Areia",
				de: "Sandgrab"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
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

	thirdParty: {
		cardmarket: 273641,
		tcgplayer: 96008
	}
}

export default card
