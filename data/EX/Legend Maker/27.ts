import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Torkoal",
		fr: "Chartor",
		de: "Qurtel"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		324,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cry for Help",
				fr: "Appel à l'aide",
				de: "Hilfeschrei"
			},
			effect: {
				en: "Search your deck for a Fire Pokémon (excluding Pokémon-ex), show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck un Pokémon  (Pokémon-ex exclus), montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
				de: "Durchsuche Dein Deck nach einem -Pokémon (außer Pokémon-ex), zeige es deinem Gegner und nimm es auf deine Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fireworks",
				fr: "Feu d'artifice",
				de: "Feuerwerk"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy attached to Torkoal.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie  attachée à Chartor.",
				de: "Wirf 1 Münze. Lege bei \"Zahl\" eine an Qurtel angelegte -Energie auf deinen Ablagestapel."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276904,
		tcgplayer: 89968
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
