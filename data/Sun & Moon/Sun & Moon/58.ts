import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Alolan Muk",
		fr: "Grotadmorv d’Alola",
		es: "Muk de Alola",
		it: "Muk di Alola",
		pt: "Muk de Alola",
		de: "Alola-Sleimok"
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
		en: "Alolan Grimer",
		fr: "Tadmorv d’Alola",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Power of Alchemy",
				fr: "Osmose",
				es: "Reacción Química",
				it: "Forza Chimica",
				pt: "Poder de Alquimia",
				de: "Chemiekraft"
			},
			effect: {
				en: "Each Basic Pokémon in play, in each player’s hand, and in each player’s discard pile has no Abilities.",
				fr: "Aucun Pokémon de base en jeu, dans la main de chaque joueur et dans leur pile de défausse, n’a de talent.",
				es: "Los Pokémon Básicos en juego, en la mano de cada jugador y en la pila de descartes de cada jugador no tienen ninguna habilidad.",
				it: "Le abilità dei Pokémon Base in gioco, in mano ai giocatori o nelle loro pile degli scarti non hanno effetto.",
				pt: "Cada Pokémon Básico em jogo, na mão e na pilha de descarte de cada jogador não possui Habilidades.",
				de: "Jedes Basis-Pokémon im Spiel, auf der Hand jedes Spielers und im Ablagestapel jedes Spielers hat keine Fähigkeiten."
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
				en: "Crunch",
				fr: "Mâchouille",
				es: "Triturar",
				it: "Sgranocchio",
				pt: "Mastigada",
				de: "Knirscher"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy from your opponent’s Active Pokémon.",
				fr: "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
				es: "Lanza 1 moneda. Si sala cara, descarta 1 Energía del Pokémon Activo de tu rival.",
				it: "Lancia una moneta. Se esce testa, scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Jogue 1 moeda. Se sair cara, descarte 1 Energia do Pokémon Ativo do seu oponente.",
				de: "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
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



}

export default card
