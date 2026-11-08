import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [294],

	name: {
		'en-us': "Loudred",
		'fr-fr': "Ramboum",
		'es-es': "Loudred",
		'it-it': "Loudred",
		'pt-br': "Loudred",
		'de-de': "Krakeelo"
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
		'en-us': "Whismur",
		'fr-fr': "Chuchmur",
		'es-es': "Whismur",
		'it-it': "Whismur",
		'pt-br': "Whismur",
		'de-de': "Flurmel"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Round",
				'fr-fr': "Chant Canon",
				'es-es': "Canon",
				'it-it': "Coro",
				'pt-br': "Circular",
				'de-de': "Kanon"
			},
			effect: {
				'en-us': "This attack does 20 damage for each of your Pokémon in play that has the Round attack.",
				'fr-fr': "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon en jeu ayant l'attaque Chant Canon.",
				'es-es': "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en juego que tenga el ataque Canon.",
				'it-it': "Questo attacco infligge 20 danni per ogni tuo Pokémon in gioco che ha l'attacco Coro.",
				'pt-br': "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon em jogo que tenha o ataque Circular.",
				'de-de': "Diese Attacke fügt für jedes deiner Pokémon im Spiel, das die Attacke Kanon hat, 20 Schadenspunkte zu."
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
				'en-us': "Hyper Voice",
				'fr-fr': "Mégaphone",
				'es-es': "Vozarrón",
				'it-it': "Granvoce",
				'pt-br': "Hipervoz",
				'de-de': "Schallwelle"
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


	stage: "Stage1",

	description: {
		'en-us': "The shock waves from its cries can tip over trucks. It stamps its feet to power up."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 512390,
				tcgplayer: 226592
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512390,
				tcgplayer: 226592
			}
		},
	],
}

export default card
