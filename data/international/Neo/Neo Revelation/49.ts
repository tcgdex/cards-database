import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Qwilfish",
		'fr-fr': "Qwilfish",
		'de-de': "Baldorfish"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		211,
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
				'en-us': "Poison Sting",
				'fr-fr': "Dard-venin",
				'de-de': "Giftstachel"
			},

			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt vergiftet."
			},

			damage: 10
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Needle Storm",
				'fr-fr': "Nuée d'épines",
				'de-de': "Nadelsturm"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 20 damage times the number of heads you get.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf eine Münze, bis du das erste Mal 'Zahl' wirfst. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl 'Kopf' zu, die di bis dahin wirfst."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "To fire its poison spikes, it must inflate its body by drinking over 2.6 gallons of water all at once.",
		'fr-fr': "Pour lancer ses piquants empoisonnés, il doit gonfler son corps en buvant 10 litres d'eau d'un seul coup."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274635,
				tcgplayer: 88492
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274635,
				tcgplayer: 88492
			}
		}
	]
}

export default card

