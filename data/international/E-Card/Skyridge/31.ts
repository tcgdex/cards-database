import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Steelix",
		'de-de': "Stahlos"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [208],

	hp: 100,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Onix",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Rare Metal",
				'de-de': "Seltenes Metall"
			},
			effect: {
				'en-us': "All basic Energy cards attached to Steelix provide Metal Energy instead of their usual types.",
				'de-de': "Alle an Stahlos angelegten Basis-Energiekarten produzieren -Energie statt ihrer normalen Energien."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Squeeze",
				'de-de': "Quetschen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage and the Defending Pokémon is now Paralyzed.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 20 Schadenspunkte plus 10 weitere Schadenspunkte zu und das verteidigende Pokémon ist jetzt gelähmt."
			},
			damage: "20+",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Colorless",
			],

			name: {
				'en-us': "Metal Tail",
				'de-de': "Metallschweif"
			},

			effect: {
				'en-us': "Before doing damage, you may flip a coin. If heads, this attack does 80 damage. If tails, this attack does nothing.",
				'de-de': "Bevor der Schaden zugefügt wird, kannst du eine Münze werfen. Bei 'Kopf' fügt dieser Angriff 80 Schadenspunkte zu. Bei 'Zahl' hat dieser Angriff keine Wirkung."
			},

			damage: 40,
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 4,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 89559,
				cardmarket: 275256
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89559,
				cardmarket: 275256
			},
		},
	],
}

export default card
