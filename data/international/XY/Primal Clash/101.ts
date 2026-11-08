import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Mr. Mime",
		'fr-fr': "M. Mime",
		'es-es': "Mr. Mime",
		'it-it': "Mr. Mime",
		'pt-br': "Mr. Mime",
		'de-de': "Pantimos"
	},

	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		122,
	],

	hp: 80,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Trick",
				'fr-fr': "Tourmagik",
				'es-es': "Truco",
				'it-it': "Raggiro",
				'pt-br': "Travessura",
				'de-de': "Trickbetrug"
			},
			effect: {
				'en-us': "Move a Pokémon Tool card attached to 1 of either player's Pokémon to another of that player's Pokémon that doesn't already have a Pokémon Tool attached to it. If there is no Pokémon to move the Pokémon Tool card to, this attack does nothing.",
				'fr-fr': "Déplacez une carte Outil Pokémon attachée à un Pokémon de l'un des joueurs vers un autre de ses Pokémon auquel un Outil Pokémon n'est pas déjà attaché. S'il n'y a aucun Pokémon vers lequel déplacer la carte Outil Pokémon, cette attaque ne fait rien.",
				'es-es': "Mueve 1 carta de Herramienta Pokémon unida a 1 de los Pokémon de cualquier jugador a otro Pokémon de ese jugador que no tenga ya 1 Herramienta Pokémon unida a él. Si no hay ningún Pokémon al que poder mover la carta de Herramienta, este ataque no hace nada.",
				'it-it': "Sposta una carta Oggetto Pokémon assegnata a uno dei Pokémon di uno dei giocatori su un altro Pokémon di quel giocatore che non ha già un Oggetto Pokémon assegnato. Se non c'è nessun altro Pokémon sul quale spostare la carta Oggetto Pokémon, questo attacco non ha effetto.",
				'pt-br': "Mova um card de Ferramenta Pokémon ligado a 1 dos Pokémon de qualquer jogador para outro Pokémon desse jogador que ainda não possua uma Ferramenta Pokémon ligada a ele. Se não houver Pokémon para o qual mover o card de Ferramenta Pokémon, esse ataque não fará nada.",
				'de-de': "Verschiebe 1 Pokémon-Ausrüstung, die an 1 Pokémon eines der beiden Spieler angelegt ist, auf ein anderes Pokémon des betroffenen Spielers, an dem noch keine Pokémon-Ausrüstung angelegt ist. Wenn es kein Pokémon gibt, auf das die Pokémon-Ausrüstung verschoben werden kann, hat dieser Angriff keine Auswirkungen."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Lock Up",
				'fr-fr': "Cage",
				'es-es': "Encerrar",
				'it-it': "Bloccare",
				'pt-br': "Prender",
				'de-de': "Einsperren"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is adept at conning people. It is said to be able to create walls out of thin air by miming.",
	},

	thirdParty: {
		cardmarket: 273632,
		tcgplayer: 95999
	}
}

export default card
