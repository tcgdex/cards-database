import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Spinarak",
		fr: "Mimigal",
		de: "Webarak"
	},
	illustrator: "Masako Yamashita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		167,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Rogne",
				de: "Nagen"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Gooey Thread",
				fr: "Fil gluant",
				de: "Klebriger Faden"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich beim nächsten Zug deines Gegners nicht zurückziehen."
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





}

export default card
