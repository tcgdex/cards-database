import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Beedrill",
		'de-de': "Bibor"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [15],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Kakuna",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Venom Spray",
				'de-de': "Vergiftungsspray"
			},
			effect: {
				'en-us': "When you play Beedrill from your hand to evolve your Active Pokémon, the Defending Pokémon is now Paralyzed and Poisoned.",
				'de-de': "Wenn du Bibor aus deiner Hand spielst, um dein aktives Pokémon zu entwickeln, ist das verteidigende Pokémon jetzt gelähmt und vergiftet."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Needle Rush",
				'de-de': "Nadelrakete"
			},
			effect: {
				'en-us': "Flip 4 coins. If you get 1 heads, this attack does 10 damage plus 10 more damage. If you get 2 heads, this attack does 10 damage plus 20 more damage. If you get 3 heads, this attack does 10 damage plus 50 more damage. If you get 4 heads, this attack does 10 damage plus 90 more damage.",
				'de-de': "Wirf 4 Münzen. Zeigt 1 Münze 'Kopf', fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu. Zeigen 2 Münzen 'Kopf', fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu. Zeigen 3 Münzen 'Kopf', fügt dieser Angriff 10 Schadenspunkte plus 50 weitere Schadenspunkte zu. Zeigen 4 Münzen 'Kopf', fügt dieser Angriff 10 Schadenspunkte plus 90 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 83765,
				cardmarket: 275246
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 83765,
				cardmarket: 275246
			},
		},
	],
	retreat: 0,
}

export default card
