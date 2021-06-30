import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Marshadow",
		fr: "Marshadow",
		es: "Marshadow",
		it: "Marshadow",
		pt: "Marshadow",
		de: "Marshadow"
	},
	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		802,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Shadowy Echoes",
				fr: "Échos Obscurs",
				es: "Ecos Sombríos",
				it: "Eco dall’Ombra",
				pt: "Ecos Sombrios",
				de: "Schattenecho"
			},
			effect: {
				en: "Put a Basic Pokémon from each player’s discard pile onto its owner’s Bench.",
				fr: "Prenez un Pokémon de base dans la pile de défausse de chaque joueur et placez-le sur son Banc.",
				es: "Pon 1 Pokémon Básico de la pila de descartes de cada jugador en la Banca de su dueño.",
				it: "Prendi un Pokémon Base dalla pila degli scarti di ciascun giocatore e mettilo nella panchina del suo proprietario.",
				pt: "Coloque 1 Pokémon Básico da pilha de descarte de cada jogador no Banco do dono dele.",
				de: "Lege 1 Basis-Pokémon aus dem Ablagestapel jedes Spielers auf die Bank seines Besitzers."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surprise Attack",
				fr: "Attaque Surprise",
				es: "Ataque Sorpresa",
				it: "Attacco a Sorpresa",
				pt: "Ataque Surpresa",
				de: "Überraschungsangriff"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
