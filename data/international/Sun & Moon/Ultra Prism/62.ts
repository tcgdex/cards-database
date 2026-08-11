import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Lunala ◇",
		'fr-fr': "Lunala ◇",
		'es-es': "Lunala ◇",
		'it-it': "Lunala ◇",
		'pt-br': "Lunala ◇",
		'de-de': "Lunala ◇"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		792,
	],
	hp: 160,
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
				'en-us': "Full Moon Star",
				'fr-fr': "Étoile Pleine Lune",
				'es-es': "Estrella Luna Llena",
				'it-it': "Stella della Luna Piena",
				'pt-br': "Estrela Lua Cheia",
				'de-de': "Vollmondstern"
			},
			effect: {
				'en-us': "For each of your opponent’s Pokémon in play, attach a Psychic Energy card from your discard pile to your Pokémon in any way you like.",
				'fr-fr': "Pour chaque Pokémon de votre adversaire en jeu, attachez une carte Énergie Psychic de votre pile de défausse à vos Pokémon, de la manière que vous voulez.",
				'es-es': "Por cada uno de los Pokémon de tu rival en juego, une 1 carta de Energía Psychic de tu pila de descartes a tus Pokémon de la manera que desees.",
				'it-it': "Per ogni Pokémon del tuo avversario in gioco, assegna a piacimento ai tuoi Pokémon una carta Energia Psychic dalla tua pila degli scarti.",
				'pt-br': "Para cada Pokémon em jogo do seu oponente, ligue 1 carta de Energia Psychic da sua pilha de descarte aos seus Pokémon como desejar.",
				'de-de': "Lege für jedes Pokémon deines Gegners im Spiel 1 Psychic-Energiekarte aus deinem Ablagestapel beliebig an deine Pokémon an."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Psystorm",
				'fr-fr': "Tempête Psy",
				'es-es': "Psicotormenta",
				'it-it': "Psicotempesta",
				'pt-br': "Tempestade Psíquica",
				'de-de': "Psisturm"
			},
			effect: {
				'en-us': "This attack does 20 damage times the amount of Energy attached to all Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées aux Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño por cada Energía unida a todos los Pokémon.",
				'it-it': "Questo attacco infligge 20 danni per ogni Energia assegnata a ciascun Pokémon.",
				'pt-br': "Este ataque causa 20 pontos de dano vezes a quantidade de Energia ligada a todos os Pokémon.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der an alle Pokémon angelegten Energien zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'fr-fr': "Tempête Psy",
			},
			effect: {
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées aux Pokémon.",
			},
			damage: "20×",

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 3,




	description: {
		'en-us': "Said to live in another world, this Pokémon devours light, drawing the moonless dark veil of night over the brightness of day.",
	},
}

export default card
