import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Wigglytuff",
		de: "Knuddeluff"
	},

	illustrator: "Hizuki Misono",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		40,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Jigglypuff",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Good Neighbor",
				de: "Guter Nachbar"
			},
			effect: {
				en: "Once during your turn (before you attack), if Wigglytuff is on your bench, you may flip a coin. If heads, each player removes up to 2 damage counters from his or her Active Pokémon. This power can't be used if you have already used another Wigglytuff's Good Neighbor Poké-Power this turn.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, falls Knuddeluff auf deiner Bank ist, eine Münze werfen. Bei \"Kopf\" entfernt jeder Spieler 2 Schadensmarken von seinem aktiven Pokémon. Diese Fähigkeit kann nicht verwendet werden, falls du in diesem Zug bereits die Poké-Power \"Guter Nachbar\" eines anderen Knuddeluffs verwendet hast."
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
				en: "Do the Wave",
				de: "Wellenreiten"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage times the number of Pokémon you have in play.",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte mal der Anzahl an Pokémon, die du im Spiel hast, zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275292,
		tcgplayer: 90595
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
