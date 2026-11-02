import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Skarmory",
		fr: "Airmure",
		de: "Panzaeron"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [250],

	dexId: [
		227,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fury Attack",
				fr: "Furie",
				de: "Furienschlag"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf zwei Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Agility",
				fr: "Hâte",
				de: "Agilität"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Skarmory.",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Airmure.",
				de: "Wirf eine Münze. Verhindere bei „Kopf“ während des nächsten gegnerischen Zugs alle Auswirkungen von Angriffen auf Panzaeron (einschließlich der Schadenspunkte)."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		en: "After nesting in bramble bushes, the wings of its chicks grow hard from scratches by thorns.",
		fr: "Ayant grandi dans un nid de ronces, ses oisillons ont les ailes durcies à force d'être griffées par les épines.",
		de: "Da ihre Nester in Dornenbüschen sind, werden schon bei den Küken die Flügel durch Kratzer der Dornen hart."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274609,
				tcgplayer: 89233
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274609,
				tcgplayer: 89233
			}
		}
	]
}

export default card

