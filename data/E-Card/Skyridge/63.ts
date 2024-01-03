import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Haunter",
		de: "Alpollo"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		93,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Gastly",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				de: "Konfustrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das verteidigende Pokémon jetzt verwirrt."
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shadow Hand",
				de: "Schattenhand"
			},
			effect: {
				en: "You may discard up to 2 cards from your hand. If you do, draw that many cards.",
				de: "Du kannst bis zu 2 Karten aus deiner Hand auf deinen Ablagestapel legen. Ziehe für jede abgelegte Karte eine neue Karte."
			},
			damage: 30,

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
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
