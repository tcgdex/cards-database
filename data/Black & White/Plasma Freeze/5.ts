import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
		es: "Exeggutor",
		it: "Exeggutor",
		pt: "Exeggutor",
		de: "Kokowei"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		103,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
		de: "Owei"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Blockade",
				fr: "Blocus",
				de: "Blockade"
			},
			effect: {
				en: "Your opponent can't play any Supporter cards from his or her hand during his or her next turn.",
				fr: "Votre adversaire ne peut pas jouer de cartes Supporter de sa main pendant son prochain tour.",
				de: "Dein Gegner kann während seines nächsten Zuges keine Unterstützerkarten von seiner Hand spielen."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stomp",
				fr: "Écrasement",
				de: "Stampfer"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: 60,

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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "It is called \"The Walking Jungle.\" If a head grows too big, it falls off and becomes an Exeggcute.",
		de: "Man nennt es den „Laufenden Dschungel“. Wird ein Kopf zu groß, fällt er ab und wird zu einem Owei."
	},

	thirdParty: {
		cardmarket: 280883,
		tcgplayer: 85363
	}
}

export default card
