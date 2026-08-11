import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Alolan Muk",
		'fr-fr': "Grotadmorv d’Alola",
		'es-es': "Muk de Alola",
		'it-it': "Muk di Alola",
		'pt-br': "Muk de Alola",
		'de-de': "Alola-Sleimok"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		89,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Alolan Grimer",
		'fr-fr': "Tadmorv d’Alola",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Power of Alchemy",
				'fr-fr': "Osmose",
				'es-es': "Reacción Química",
				'it-it': "Forza Chimica",
				'pt-br': "Poder de Alquimia",
				'de-de': "Chemiekraft"
			},
			effect: {
				'en-us': "Each Basic Pokémon in play, in each player’s hand, and in each player’s discard pile has no Abilities.",
				'fr-fr': "Aucun Pokémon de base en jeu, dans la main de chaque joueur et dans leur pile de défausse, n’a de talent.",
				'es-es': "Los Pokémon Básicos en juego, en la mano de cada jugador y en la pila de descartes de cada jugador no tienen ninguna habilidad.",
				'it-it': "Le abilità dei Pokémon Base in gioco, in mano ai giocatori o nelle loro pile degli scarti non hanno effetto.",
				'pt-br': "Cada Pokémon Básico em jogo, na mão e na pilha de descarte de cada jogador não possui Habilidades.",
				'de-de': "Jedes Basis-Pokémon im Spiel, auf der Hand jedes Spielers und im Ablagestapel jedes Spielers hat keine Fähigkeiten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crunch",
				'fr-fr': "Mâchouille",
				'es-es': "Triturar",
				'it-it': "Sgranocchio",
				'pt-br': "Mastigada",
				'de-de': "Knirscher"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sala cara, descarta 1 Energía del Pokémon Activo de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Jogue 1 moeda. Se sair cara, descarte 1 Energia do Pokémon Ativo do seu oponente.",
				'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "While it's unexpectedly quiet and friendly, if it's not fed any trash for a while, it will smash its Trainer's furnishings and eat up the fragments.",
	},

	thirdParty: {
		cardmarket: 295369,
		tcgplayer: 126929
	}
}

export default card
