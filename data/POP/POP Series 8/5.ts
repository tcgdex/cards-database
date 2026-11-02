import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Yanmega",
		de: "Yanmega"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		469,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Yanma",
		de: "Yanma"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Supersonic",
				de: "Superschall"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt verwirrt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Air Slash",
				de: "Luftschnitt"
			},
			effect: {
				en: "Flip a coin. If tails, discard an Energy attached to Yanmega.",
				de: "Wirf 1 Münze. Bei „Zahl“ lege 1 an Yanmega angelegte Energie auf deinen Ablagestapel."
			},
			damage: 70,

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

	description: {
		en: "By churning its wings, it creates shock waves that inflict critical internal injuries to foes.",
		de: "Durch die Bewegung seiner Flügel entstehen Schockwellen, die dem Gegner innere Verletzungen zufügen."
	},

	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278406,
				tcgplayer: 90691
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 278406,
				tcgplayer: 90691
			}
		},
	],
}

export default card
