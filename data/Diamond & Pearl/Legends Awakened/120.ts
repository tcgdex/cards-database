import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Sneasel",
		fr: "Farfuret",
		de: "Sniebel"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		215,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Rob",
				fr: "Dérober",
				de: "Räuber"
			},
			effect: {
				en: "Look at your opponent's hand. If your opponent has any Pokémon Tool or Technical Machine cards in his or her hand, put those cards on top of his or her deck. Your opponent shuffles his or her deck afterward.",
				fr: "Regardez la main de votre adversaire. S'il possède des cartes Outil Pokémon ou Machine Technique, placez ces cartes au dessus de son deck. Ensuite, votre adversaire mélange son deck.",
				de: "Schau dir die Handkarten deines Gegners an. Lege alle Pokémon-Ausrüstungs- und Technische Maschine-Karten, die du dort gefunden hast, auf das Deck deines Gegners. Dein Gegner mischt sein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Schlitzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278269
	}
}

export default card
