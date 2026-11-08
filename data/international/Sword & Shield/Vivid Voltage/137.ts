import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [295],

	name: {
		'en-us': "Exploud",
		'fr-fr': "Brouhabam",
		'es-es': "Exploud",
		'it-it': "Exploud",
		'pt-br': "Exploud",
		'de-de': "Krawumms"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 160,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Loudred",
		'fr-fr': "Ramboum",
		'es-es': "Loudred",
		'it-it': "Loudred",
		'pt-br': "Loudred",
		'de-de': "Krakeelo"
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
				'en-us': "This attack does 50 damage for each of your Pokémon in play that has the Round attack.",
				'fr-fr': "Cette attaque inflige 50 dégâts pour chacun de vos Pokémon en jeu ayant l'attaque Chant Canon.",
				'es-es': "Este ataque hace 50 puntos de daño por cada uno de tus Pokémon en juego que tenga el ataque Canon.",
				'it-it': "Questo attacco infligge 50 danni per ogni tuo Pokémon in gioco che ha l'attacco Coro.",
				'pt-br': "Este ataque causa 50 pontos de dano para cada um dos seus Pokémon em jogo que tenha o ataque Circular.",
				'de-de': "Diese Attacke fügt für jedes deiner Pokémon im Spiel, das die Attacke Kanon hat, 50 Schadenspunkte zu."
			},
			damage: "50×",

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

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "Its roar in battle shakes the ground like a tremor—or like an earthquake has struck."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 512395,
				tcgplayer: 226593
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512395,
				tcgplayer: 226593
			}
		},
	],
}

export default card
