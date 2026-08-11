import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Exploud",
		'fr-fr': "Brouhabam",
		'de-de': "Krawumms"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [295],

	hp: 130,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Loudred",
		'fr-fr': "Ramboum"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Erasing Sound",
				'fr-fr': "Son effaçant",
				'de-de': "Löschgeräusche"
			},
			effect: {
				'en-us': "Each of your Pokémon has no Weakness.",
				'fr-fr': "Aucun de vos Pokémon ne possède de Faiblesse.",
				'de-de': "Deine Pokémon haben keine Schwäche."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Knock Back",
				'fr-fr': "Engloutir",
				'de-de': "Schlag versetzen"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
				'de-de': "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Beam",
				'fr-fr': "Ultralaser",
				'de-de': "Hyperstrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" lege 1 Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278719,
				tcgplayer: 85373,
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278719,
				tcgplayer: 85373
			}
		},
	],

}

export default card
