import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Chikorita",
		es: "Chikorita",
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		152,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Run Around",
				es: "Correr Alrededor",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			},
		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Vine Whip",
				es: "Látigo Cepa",
			},

			damage: 20,
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Running around, climbing trees, playing hide-and-seek! Another wonderful day begins!",
		es: "¡Correteando, subiendo a los árboles y jugando al escondite! ¡Comienza otro maravilloso día!",
	},

	thirdParty: {
		tcgplayer: 113742
	}
}

export default card
