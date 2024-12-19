import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Farfetch'd",
		fr: "Canarticho",
		de: "Porenta"
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

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Go and Collect",
				fr: "Aller chercher",
				de: "Fliegen und Sammeln"
			},
			effect: {
				en: "Search your deck for a Trainer, Supporter, or Stadium card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte Dresseur, Supporter ou Stade, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach 1 Trainer-, Unterstützer- oder Stadion-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fury Cutter",
				fr: "Taillade",
				de: "Zornklinge"
			},
			effect: {
				en: "Flip 3 coins. If 1 of them is heads, this attack does 10 damage plus 10 more damage. If 2 of them are heads, this attack does 10 damage plus 20 more damage. If all of them are heads, this attack does 10 damage plus 40 more damage.",
				fr: "Lancez 3 pièces. Si l'1 d'elles est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires. Si 2 d'entre elles sont des faces, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires. Si ce ne sont que des faces, cette attaque inflige 10 dégâts plus 40 dégâts supplémentaires.",
				de: "Wirf 3 Münzen. Bei 1 Mal \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu. Bei 2 Mal \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu. Bei 3 Mal \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 40 weitere Schadenspunkte zu."
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
		fr: "Il ne peut pas vivre sans son légume, c'est pourquoi il le protégera au péril de sa vie."
	}
}

export default card
