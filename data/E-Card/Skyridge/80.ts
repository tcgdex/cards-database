import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Natu",
		de: "Natu"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		177,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Foresight",
				de: "Blick in die Zukunft"
			},
			effect: {
				en: "Look at the top 3 cards of either player's deck and rearrange them as you like.",
				de: "Schaue dir die drei obersten Karten entweder von deinem Deck oder dem Deck deines Gegners an und lege sie in einer beliebigen Reihnvolge wieder zurück."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Removal Beam",
				de: "Entfernungsstrahl"
			},
			effect: {
				en: "If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose one of those Energy cards and discard it.",
				de: "Wirf eine Münze, falls an das verteidigende Pokémon mindestens eine Energiekarte angelegt ist. Wähle bei \"Kopf\" 1 dieser Energiekarten und lege sie auf den Ablagestapel deines Gegners."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275338,
		tcgplayer: 87683
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
