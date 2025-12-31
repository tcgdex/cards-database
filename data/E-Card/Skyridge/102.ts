import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Stantler",
		de: "Damhirplex"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		234,
	],

	hp: 60,

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
				en: "Threaten",
				de: "Bedrohen"
			},
			effect: {
				en: "Flip a coin. If heads, look at your opponent's hand. If he or she has any Trainer cards there, choose 1 of them. Your opponent shuffles that card back into his or her deck.",
				de: "Wirf eine Münze. Schau dir bei \"Kopf\" die Karten auf der Hand deines Gegners an. Wenn er darunter mindestens eine Trainerkarte hat, wähle eine davon. Dein Gegner mischt diese Karte in sein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Antler Swipe",
				de: "Geweihschlag"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage to the Defending Pokémon (Don't apply Weakness and Resistance) If tails, your and opponent has any Benched Pokémon, choose 1 of them and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff dem verteidigenden Pokémon 20 Schadenspunkte zu. (Wende keine Schwäche oder Resistenz an.) Bei \"Zahl\", wähle 1 Pokémon von der Bank deines Gegners, wenn dort Pokémon vorhanden sind. Dieser Angriff fügt diesem Pokémon 20 Schadenspunkte zu. (Wende keine Schwäche oder Resistenz bei Pokémon auf der Bank an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275360,
		tcgplayer: 89502
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
