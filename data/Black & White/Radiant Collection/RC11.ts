import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Wobbuffet",
		es: "Wobbuffet",
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		202,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bide Barricade",
				es: "Barricada Paciencia",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, each Pokémon in play, in each player's hand, and in each player's discard pile has no Abilities (except for Psychic Pokémon).",
				es: "Mientras este Pokémon sea tu Pokémon Activo, los Pokémon en juego, en la mano de cada jugador y en la pila de descartes de cada jugador no tienen ninguna habilidad (excepto los Pokémon Psychic).",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic Assault",
				es: "Asalto Psíquico",
			},
			effect: {
				en: "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
				es: "Este ataque hace 10 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			},

			damage: "10+",
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "When she's surrounded by cushions and dressers that I like, she looks just like a princess!",
		es: "Cuando está rodeada de encantadores cojines y muebles, ¡parece enteramente una princesa!",
	},

	thirdParty: {
		tcgplayer: 113753
	}
}

export default card
