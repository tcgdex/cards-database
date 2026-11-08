import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Swellow",
		'fr-fr': "Heledelle",
		'de-de': "Schwalboss"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [277],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Taillow",
		'fr-fr': "Nirondelle"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Clutch",
				'fr-fr': "Serre",
				'de-de': "Greifer"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat until the end of your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite tant que le prochain tour de votre adversaire n'est pas terminé.",
				'de-de': "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Dive",
				'fr-fr': "Plongeon rapide",
				'de-de': "Schnelltaucher"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 50 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez un des Pokémon de votre adversaire. Cette attaque lui inflige 50 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' wähle 1 gegnerisches Pokémon. Dieser Angriff fügt dem ausgewählten Pokémon 50 Schadenspunkte zu. Der Schaden dieses Angriffs wird durch die Schwäche und Resistenz des ausgewählten nicht verändert."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 0,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89689,
				cardmarket: 275922
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89689,
				cardmarket: 275922
			},
		},
	],

}

export default card
