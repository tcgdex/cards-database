import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Tyranitar",
		'fr-fr': "Tyranocif",
		'de-de': "Despotar"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [248],

	hp: 120,

	types: [
		"Darkness"
	],

	evolveFrom: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Destructive Roar",
				'fr-fr': "Hurlement destructeur",
				'de-de': "Zerstörendes Brüllen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard 1 Energy card attached to 1 of your opponent's Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez une carte Énergie attachée à l'un des Pokémon de votre adversaire.",
				'de-de': "Wirf eine Münze. Lege bei 'Kopf' 1 Energiekarte, die an 1 Pokémon deines Gegners angelegt ist, auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Slap",
				'fr-fr': "Attaque caudale",
				'de-de': "Schweifschlag"
			},

			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gigacrush",
				'fr-fr': "Gigacrash",
				'de-de': "Gigamalmer"
			},
			effect: {
				'en-us': "Each player discards the top 3 cards from his or her deck.",
				'fr-fr': "Chaque joueur se défausse des 3 premières cartes du dessus de son deck.",
				'de-de': "Jeder Spieler legt die 3 obersten Karten seines Decks auf seinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90114,
				cardmarket: 275112
			}
		},
	]
}

export default card
