import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Gyarados",
		'fr-fr': "Leviator",
		'de-de': "Garados"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Tail Revenge",
				'fr-fr': "Queue vengeance",
				'de-de': "Vergeltungsschweif"
			},
			effect: {
				'en-us': "Does 30 damage times the number of Magikarp in your discard pile.",
				'fr-fr': "Inflige 30 dégâts multipliés par le nombre de Magicarpes dans votre pile de défausse.",
				'de-de': "Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl Karpador-Karten in deinem Ablagestapel zu."
			},
			damage: "30x",

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Wreak Havoc",
				'fr-fr': "Causer des ravages",
				'de-de': "Chaos anrichten"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. For each heads, discard the top card from your opponent's deck.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, défaussez la carte du dessus du deck de votre adversaire.",
				'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Lege pro \"Kopf\" die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Beat",
				'fr-fr': "Draco-battement",
				'de-de': "Drachenschlag"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy card from each of your opponent's Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une carte Énergie de chacun des Pokémon de votre adversaire.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" entferne von jedem Pokémon deines Gegners 1 Energiekarte und lege sie auf seinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 278317,
		tcgplayer: 85994
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "holo",
			foil: "cosmos"
		},
		{
			type: "normal",
			stamp: ["mychael-bryan"]
		},
	]
}

export default card
