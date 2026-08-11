import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Wigglytuff",
		'de-de': "Knuddeluff"
	},

	illustrator: "Hizuki Misono",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [40],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Jigglypuff",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Good Neighbor",
				'de-de': "Guter Nachbar"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Wigglytuff is on your bench, you may flip a coin. If heads, each player removes up to 2 damage counters from his or her Active Pokémon. This power can't be used if you have already used another Wigglytuff's Good Neighbor Poké-Power this turn.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, falls Knuddeluff auf deiner Bank ist, eine Münze werfen. Bei \"Kopf\" entfernt jeder Spieler 2 Schadensmarken von seinem aktiven Pokémon. Diese Fähigkeit kann nicht verwendet werden, falls du in diesem Zug bereits die Poké-Power \"Guter Nachbar\" eines anderen Knuddeluffs verwendet hast."
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
				'en-us': "Do the Wave",
				'de-de': "Wellenreiten"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage times the number of Pokémon you have in play.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte mal der Anzahl an Pokémon, die du im Spiel hast, zu."
			},
			damage: "10×",

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
				tcgplayer: 90595,
				cardmarket: 275292
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 90595,
				cardmarket: 275292
			},
		},
	],
}

export default card
