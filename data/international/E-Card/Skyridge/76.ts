import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Magnemite",
		'de-de': "Magnetilo"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [81],

	hp: 40,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Thunder Wave",
				'de-de': "Donnerwelle"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt gelähmt."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Magnetic Lines",
				'de-de': "Magnetische Linien"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any basic Energy cards attached to it, flip a coin. If heads, choose 1 of those Energy cards and move it to 1 of your opponent's Benched Pokémon. If your opponent has no Benched Pokémon, ignore this effect.",
				'de-de': "Wirf eine Münze, falls an das verteidigende Pokémon mindestens eine Basis-Energiekarte angelegt ist. Wähle bei 'Kopf' 1 dieser Energiekarten und lege sie auf 1 der Pokémon auf der Bank deines Gegners. Hat dein Gegner kein Pokémon auf seiner Bank, ignoriere diesen Effekt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87069,
				cardmarket: 275334
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87069,
				cardmarket: 275334
			},
		},
	],
}

export default card
