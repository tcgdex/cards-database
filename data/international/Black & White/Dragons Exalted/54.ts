import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Garbodor",
		'fr-fr': "Miasmax",
		'es-es': "Garbodor",
		'it-it': "Garbodor",
		'pt-br': "Garbodor",
		'de-de': "Deponitox"
	},

	illustrator: "kawayoo",
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
				'en-us': "If this Pokémon has a Pokémon Tool card attached to it, each Pokémon in play, in each player’s hand, and in each player’s discard pile has no Abilities (except for Garbotoxin).",
				'fr-fr': "Si une carte Outil Pokémon est attachée à ce Pokémon, chacun des Pokémon en jeu, dans la main de chaque joueur et dans la pile de défausse de chaque joueur, n’a pas de capacité spéciale (à part Miasmotoxine).",
				'es-es': "Si este Pokémon tiene una carta de Herramienta Pokémon unida a él, los Pokémon en juego, en la mano de cada jugador y en la pila de descartes de cada jugador no tienen ninguna habilidad (excepto Garbotoxina).",
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
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Sludge Toss",
				'fr-fr': "Giclée Vaseuse",
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
		'en-us': "It clenches opponents with its left arm and finishes them off with foul-smelling poison gas belched from its mouth.",
	},

	thirdParty: {
		cardmarket: 280493,
		tcgplayer: 85616
	}
}

export default card
