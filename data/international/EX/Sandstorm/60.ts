import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Dunsparce",
		'fr-fr': "Insolourdo",
		'de-de': "Dummisel"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [206],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Strike and Run",
				'fr-fr': "Frappe et cours",
				'de-de': "Guerillataktik"
			},
			effect: {
				'en-us': "Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward. You may switch Dunsparce with 1 of your Benched Pokémon.",
				'fr-fr': "Choisissez dans votre deck jusqu'à trois Pokémon de base et placez-les sur votre Banc. Ensuite, mélangez votre deck. Vous pouvez échanger Insolourdo contre un des Pokémon de votre Banc.",
				'de-de': "Durchsuche dein Deck nach bis zu 3 Basis-Pokémon und lege sie auf deine Bank. Mische dein Deck danach. Du kannst Dummisel gegen ein Pokémon auf deiner Bank austauschen."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sudden Flash",
				'fr-fr': "Flash surprise",
				'de-de': "Plötzlicher Blitz"
			},
			effect: {
				'en-us': "Flip a coin. If heads, each Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, chaque Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275837,
				tcgplayer: 85008
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275837,
				tcgplayer: 85008
			}
		},
		{
			type: "normal",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 125154
			}
		},
		{
			type: "normal",
			stamp: ["chris-fulop"],
			thirdParty: {
				cardmarket: 871809,
				tcgplayer: 477380
			}
		},
		{
			type: "normal",
			stamp: ["reed-weichler"],
			thirdParty: {
				cardmarket: 871811,
				tcgplayer: 477381
			}
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"],
			thirdParty: {
				cardmarket: 871810,
				tcgplayer: 477382
			}
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"],
			thirdParty: {
				cardmarket: 871534,
				tcgplayer: 477517
			}
		},
		{
			type: "normal",
			stamp: ["michael-gonzalez"],
			thirdParty: {
				cardmarket: 871533,
				tcgplayer: 477518
			}
		}
	],

}

export default card
