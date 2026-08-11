import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Machamp",
		'de-de': "Machomei"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [68],

	hp: 120,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Machoke",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Immunity",
				'de-de': "Immunität"
			},
			effect: {
				'en-us': "Prevent all effects of your opponent's attacks done to Machamp.",
				'de-de': "Verhindere alle Auswirkungen der Angriffe deines Gegners, die Machomei betreffen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Drag Off",
				'de-de': "Wegzerren"
			},
			effect: {
				'en-us': "Before doing damage, if your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon. If your opponent has no Benched Pokémon, ignore this effect.",
				'de-de': "Falls dein Gegner mindestens ein Pokémon auf der Bank hat, bevor der Schaden zugefügt wird, wähle eines von diesen und tausche es mit dem verteidigenden Pokémon aus. Hat dein Gegner kein Pokémon auf seiner Bank, ignoriere diesen Effekt."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hurricane Punch",
				'de-de': "Hurrikan-Hieb"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 30 damage times the number of heads.",
				'de-de': "Wirf 4 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 86958,
				cardmarket: 275274
			},
		},
	],
}

export default card
