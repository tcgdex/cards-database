import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Garbodor",
		fr: "Miasmax",
		es: "Garbodor",
		it: "Garbodor",
		pt: "Garbodor",
		de: "Deponitox"
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
		en: "Trubbish",
		fr: "Miamiasme",
		es: "Trubbish",
		it: "Trubbish",
		pt: "Trubbish",
		de: "Unratütox"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Garbotoxin",
				fr: "Miasmotoxine",
				es: "Garbotoxina",
				it: "Garbotossina",
				pt: "Garbotoxina",
				de: "Unratoxin"
			},
			effect: {
				en: "If this Pokémon has a Pokémon Tool card attached to it, each Pokémon in play, in each player's hand, and in each player's discard pile has no Abilities (except for Garbotoxin).",
				fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, chacun des Pokémon en jeu, dans la main de chaque joueur et dans la pile de défausse de chaque joueur, n'a pas de talent (à part Miasmotoxine).",
				es: "Si este Pokémon tiene 1 carta de Herramienta Pokémon unida a él, los Pokémon en juego, en la mano de cada jugador y en la pila de descartes de cada jugador no tienen ninguna habilidad (excepto Garbotoxina).",
				it: "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, le abilità dei Pokémon in gioco, in mano ai giocatori o nelle loro pile degli scarti non hanno più effetto (a eccezione di Garbotossina).",
				pt: "Se este Pokémon possuir um card de Ferramenta Pokémon ligado a ele, cada Pokémon em jogo, na mão de cada jogador, e também na pilha de descarte de cada jogador, não terá Habilidades (exceto Garbotoxina).",
				de: "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, hat jedes Pokémon im Spiel, in der Hand beider Spieler oder im Ablagestapel beider Spieler, keine Fähigkeit (außer Unratoxin)."
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
				en: "Offensive Bomb",
				fr: "Bombe Offenseuse",
				es: "Bomba Ofensiva",
				it: "Bomba Offensiva",
				pt: "Bomba Ofensiva",
				de: "Stinkbombe"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet."
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

	thirdParty: {
		cardmarket: 288232
	}
}

export default card
