import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Loudred",
		fr: "Ramboum",
		es: "Loudred",
		it: "Loudred",
		pt: "Loudred",
		de: "Krakeelo"
	},

	illustrator: "miki kudo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Whismur",
		fr: "Chuchmur",
		es: "Whismur",
		it: "Whismur",
		pt: "Whismur",
		de: "Flurmel"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Round",
				fr: "Chant Canon",
				es: "Canon",
				it: "Coro",
				pt: "Circular",
				de: "Kanon"
			},
			effect: {
				en: "This attack does 20 damage for each of your Pokémon in play that has the Round attack.",
				fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon en jeu ayant l'attaque Chant Canon.",
				es: "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en juego que tenga el ataque Canon.",
				it: "Questo attacco infligge 20 danni per ogni tuo Pokémon in gioco che ha l'attacco Coro.",
				pt: "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon em jogo que tenha o ataque Circular.",
				de: "Diese Attacke fügt für jedes deiner Pokémon im Spiel, das die Attacke Kanon hat, 20 Schadenspunkte zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Voice",
				fr: "Mégaphone",
				es: "Vozarrón",
				it: "Granvoce",
				pt: "Hipervoz",
				de: "Schallwelle"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "The shock waves from its cries can tip over trucks. It stamps its feet to power up."
	}
}

export default card
