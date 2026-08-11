import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Jolteon",
		'fr-fr': "Voltali",
		'de-de': "Blitza"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [135],

	hp: 80,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Agility",
				'fr-fr': "Hâte",
				'de-de': "Agilität"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of attacks, including damage, done to Jolteon during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques (y compris les dégâts) infligés à Voltali pendant le prochain tour de votre adversaire.",
				'de-de': "Wirf eine Münze. Verhindere bei \"Kopf\" während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die Blitza zugefügt werden."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Mach Bolt",
				'fr-fr': "Éclair fulgurant",
				'de-de': "Flotter Sprung"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 0,
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	description: {
		'en-us': "It concentrates the weak electric charges emitted by its cells and launches wicked lightning bolts.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86346,
				cardmarket: 279688
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86346,
				cardmarket: 279688
			},
		},
	],

}

export default card
