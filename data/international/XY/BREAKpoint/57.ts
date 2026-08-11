import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Garbodor",
		'fr-fr': "Miasmax",
		'es-es': "Garbodor",
		'it-it': "Garbodor",
		'pt-br': "Garbodor",
		'de-de': "Deponitox"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		569,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Trubbish",
		'fr-fr': "Miamiasme",
		'es-es': "Trubbish",
		'it-it': "Trubbish",
		'pt-br': "Trubbish",
		'de-de': "Unratütox"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Garbotoxin",
				'fr-fr': "Miasmotoxine",
				'es-es': "Garbotoxina",
				'it-it': "Garbotossina",
				'pt-br': "Garbotoxina",
				'de-de': "Unratoxin"
			},
			effect: {
				'en-us': "If this Pokémon has a Pokémon Tool card attached to it, each Pokémon in play, in each player's hand, and in each player's discard pile has no Abilities (except for Garbotoxin).",
				'fr-fr': "Si une carte Outil Pokémon est attachée à ce Pokémon, chacun des Pokémon en jeu, dans la main de chaque joueur et dans la pile de défausse de chaque joueur, n'a pas de talent (à part Miasmotoxine).",
				'es-es': "Si este Pokémon tiene 1 carta de Herramienta Pokémon unida a él, los Pokémon en juego, en la mano de cada jugador y en la pila de descartes de cada jugador no tienen ninguna habilidad (excepto Garbotoxina).",
				'it-it': "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, le abilità dei Pokémon in gioco, in mano ai giocatori o nelle loro pile degli scarti non hanno più effetto (a eccezione di Garbotossina).",
				'pt-br': "Se este Pokémon possuir um card de Ferramenta Pokémon ligado a ele, cada Pokémon em jogo, na mão de cada jogador, e também na pilha de descarte de cada jogador, não terá Habilidades (exceto Garbotoxina).",
				'de-de': "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, hat jedes Pokémon im Spiel, in der Hand beider Spieler oder im Ablagestapel beider Spieler, keine Fähigkeit (außer Unratoxin)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Offensive Bomb",
				'fr-fr': "Bombe Offenseuse",
				'es-es': "Bomba Ofensiva",
				'it-it': "Bomba Offensiva",
				'pt-br': "Bomba Ofensiva",
				'de-de': "Stinkbombe"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused and Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Consuming garbage makes new kinds of poison gases and liquids inside their bodies.",
	},

	thirdParty: {
		cardmarket: 288232,
		tcgplayer: 111598
	}
}

export default card
