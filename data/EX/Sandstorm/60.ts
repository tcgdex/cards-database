import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Dunsparce",
		fr: "Insolourdo",
		de: "Dummisel"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		206,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Strike and Run",
				fr: "Frappe et cours",
				de: "Guerillataktik"
			},
			effect: {
				en: "Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward. You may switch Dunsparce with 1 of your Benched Pokémon.",
				fr: "Choisissez dans votre deck jusqu'à trois Pokémon de base et placez-les sur votre Banc. Ensuite, mélangez votre deck. Vous pouvez échanger Insolourdo contre un des Pokémon de votre Banc.",
				de: "Durchsuche dein Deck nach bis zu 3 Basis-Pokémon und lege sie auf deine Bank. Mische dein Deck danach. Du kannst Dummisel gegen ein Pokémon auf deiner Bank austauschen."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sudden Flash",
				fr: "Flash surprise",
				de: "Plötzlicher Blitz"
			},
			effect: {
				en: "Flip a coin. If heads, each Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, chaque Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
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

	thirdParty: {
		cardmarket: 275837,
		tcgplayer: 85008
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			subtype: "no-e-reader"
		},
		{
			type: "normal",
			stamp: ["chris-fulop"]
		},
		{
			type: "normal",
			stamp: ["reed-weichler"]
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"]
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"]
		},
		{
			type: "normal",
			stamp: ["michael-gonzalez"]
		}
	]
}

export default card
