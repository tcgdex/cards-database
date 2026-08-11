import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Snorlax",
		'de-de': "Relaxo"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [143],

	hp: 80,

	types: [
		"Colorless"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Lolling About",
				'de-de': "Herumlümmeln"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Snorlax is your Active Pokémon, you may remove 1 damage counter from Snorlax. Snorlax is now Asleep. This power can't be used if Snorlax is affected by a Special Condition.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, falls Relaxo dein aktives Pokémon ist, 1 Schadensmarke von Relaxo entfernen. Relaxo schläft jetzt. Diese Fähigkeit kann nicht verwendet werden, falls Relaxo von einem speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Continuous Tumble",
				'de-de': "Dauerrollen"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				'de-de': "Wirf eine Münze, bis du \"Zahl\" wirfst. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 3,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 89387,
				cardmarket: 275358
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89387,
				cardmarket: 275358
			},
		},
	],
}

export default card
