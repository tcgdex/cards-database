import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Marshadow",
		'fr-fr': "Marshadow",
		'es-es': "Marshadow",
		'it-it': "Marshadow",
		'pt-br': "Marshadow",
		'de-de': "Marshadow"
	},
	illustrator: "kirisAki",
	rarity: "Promo",
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
				'en-us': "Shadowy Echoes",
				'fr-fr': "Échos Obscurs",
				'es-es': "Ecos Sombríos",
				'it-it': "Eco dall’Ombra",
				'pt-br': "Ecos Sombrios",
				'de-de': "Schattenecho"
			},
			effect: {
				'en-us': "Put a Basic Pokémon from each player’s discard pile onto its owner’s Bench.",
				'fr-fr': "Prenez un Pokémon de base dans la pile de défausse de chaque joueur et placez-le sur son Banc.",
				'es-es': "Pon 1 Pokémon Básico de la pila de descartes de cada jugador en la Banca de su dueño.",
				'it-it': "Prendi un Pokémon Base dalla pila degli scarti di ciascun giocatore e mettilo nella panchina del suo proprietario.",
				'pt-br': "Coloque 1 Pokémon Básico da pilha de descarte de cada jogador no Banco do dono dele.",
				'de-de': "Lege 1 Basis-Pokémon aus dem Ablagestapel jedes Spielers auf die Bank seines Besitzers."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Surprise Attack",
				'fr-fr': "Attaque Surprise",
				'es-es': "Ataque Sorpresa",
				'it-it': "Attacco a Sorpresa",
				'pt-br': "Ataque Surpresa",
				'de-de': "Überraschungsangriff"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
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




	description: {
		'en-us': "Able to conceal itself in shadows, it never appears before humans, so its very existence was the stuff of myth.",
	},
}

export default card
