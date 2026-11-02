import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Jynx",
		fr: "Lippoutou",
		de: "Rossana"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		124,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Freezing Kiss Goodnight",
				fr: "Bisou glacial",
				de: "Eisiger Gutenachtkuss"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Strange Dance",
				fr: "Danse étrange",
				de: "Seltsamer Tanz"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage and the Defending Pokémon is now Confused. If tails, this attack does 20 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus. Si c'est pile, cette attaque inflige 20 dégâts.",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu und das verteidigende Pokémon ist jetzt verwirrt. Bei „Zahl“ fügt dieser Angriff 20 Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "It rocks its body rhythmically. It appears to alter the rhythm depending on how it is feeling.",
		fr: "Il fait onduler son corps en rythme. Celui-ci semble changer selon son humeur.",
		de: "Es schaukelt seinen Körper rhythmisch hin und her. Es sieht so aus, als würde sich der Rhythmus je nach Gefühlslage ändern."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274617,
				tcgplayer: 86373
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274617,
				tcgplayer: 86373
			}
		}
	]
}

export default card

