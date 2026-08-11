import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Poliwrath",
		'de-de': "Quappo"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [62],

	hp: 110,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Poliwhirl",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Strange Spiral",
				'de-de': "Seltsame Spirale"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Poliwrath is your Active Pokémon, you may discard a basic Energy card attached to Poliwrath. If you do, the Defending Pokémon is now Confused. This power can't be used if Poliwrath is affected by a Special Condition.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, falls Quappo dein aktives Pokémon ist, eine an Quappo angelegte Basis-Energiekarte auf deinen Ablagestapel legen. Falls du dies tust, ist das verteidigende Pokémon jetzt verwirrt. Diese Fähigkeit kann nicht verwendet werden, falls Quappo von einem speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Spiral Punch",
				'de-de': "Spiral-Hieb"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 40 damage plus 20 more damage for each heads.",
				'de-de': "Wirf eine Münze, bis du 'Zahl' wirfst. Dieser Angriff fügt 40 Schadenspunkte plus 20 weitere Schadenspunkte plus geworfenem 'Kopf' zu."
			},
			damage: "40+",

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
			type: 'normal',
			thirdParty: {
				tcgplayer: 88273,
				cardmarket: 275232
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 88273,
				cardmarket: 275232
			},
		},
	],
}

export default card
