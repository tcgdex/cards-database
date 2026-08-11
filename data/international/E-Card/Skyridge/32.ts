import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Umbreon",
		'de-de': "Nachtara"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [197],

	hp: 70,

	types: [
		"Darkness"
	],

	evolveFrom: {
		'en-us': "Eevee",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Dark Gaze",
				'de-de': "Finsterer Blick"
			},
			effect: {
				'en-us': "As long as Umbreon is your Active Pokémon, Benched Pokémon (yours and your opponent's) can't use Poké-Powers.",
				'de-de': "Solange Nachtara dein aktives Pokémon ist, können Pokémon auf der Bank (deine und die deines Gegners) keine Poke-Power verwenden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Sharp Claws",
				'de-de': "Scharfe Klaue"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 30 more damage.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 90141,
				cardmarket: 275255
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 90141,
				cardmarket: 275255
			},
		},
	],
}

export default card
