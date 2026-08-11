import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Farfetch'd",
		'fr-fr': "Canarticho",
		'de-de': "Porenta"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		83,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'fr-fr': "Canarticho",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Go and Collect",
				'fr-fr': "Aller chercher",
				'de-de': "Fliegen und Sammeln"
			},
			effect: {
				'en-us': "Search your deck for a Trainer, Supporter, or Stadium card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte Dresseur, Supporter ou Stade, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 Trainer-, Unterstützer- oder Stadion-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fury Cutter",
				'fr-fr': "Taillade",
				'de-de': "Zornklinge"
			},
			effect: {
				'en-us': "Flip 3 coins. If 1 of them is heads, this attack does 10 damage plus 10 more damage. If 2 of them are heads, this attack does 10 damage plus 20 more damage. If all of them are heads, this attack does 10 damage plus 40 more damage.",
				'fr-fr': "Lancez 3 pièces. Si l'1 d'elles est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires. Si 2 d'entre elles sont des faces, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires. Si ce ne sont que des faces, cette attaque inflige 10 dégâts plus 40 dégâts supplémentaires.",
				'de-de': "Wirf 3 Münzen. Bei 1 Mal \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu. Bei 2 Mal \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu. Bei 3 Mal \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 40 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It can't live without the stalk it holds. That's why it defends the stalk from attackers with its life.",
		'fr-fr': "Il ne peut pas vivre sans son légume, c'est pourquoi il le protégera au péril de sa vie."
	},

	thirdParty: {
		cardmarket: 278336,
		tcgplayer: 85387
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
