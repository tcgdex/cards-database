import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Mismagius",
		de: "Traunmagil"
	},
	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		429,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Misdreavus",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sleeping Spell",
				de: "Schlafzauber"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				de: "Wirf eine Münze. Bei \"Kopf\" schläft das Verteidigende Pokémon jetzt."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poltergeist",
				de: "Poltergeist"
			},
			effect: {
				en: "Look at your opponent's hand. This attack does 30 damage times the number of Trainer, Supporter, and Stadium cards in your opponent's hand.",
				de: "Schau dir die Handkarten deines Gegners an. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl der Trainer-, Unterstützer- und Stadion-Karten, die du dort gefunden hast, zu."
			},
			damage: "30x",

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],




}

export default card
