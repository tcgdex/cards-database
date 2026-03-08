import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Regirock Star",
		fr: "Regirock ☆",
		de: "Regirock *"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		377,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Dig Drain",
				fr: "Trou épuisant",
				de: "Umgraben"
			},
			effect: {
				en: "Remove 1 damage counter from Regirock Star.",
				fr: "Retirez à Regirock  1 marqueur de dégât.",
				de: "Entferne 1 Schadensmarke von Regirock *."
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Final Blast",
				fr: "Explosion finale",
				de: "Finaler Schuss"
			},
			effect: {
				en: "If your opponent has only 1 Prize card left and Regirock Star is the only Pokémon you have in play, this attack's base damage is 100 instead of 30.",
				fr: "S'il reste à votre adversaire une seule carte Récompense et que Regirock  est le seul Pokémon que vous ayez en jeu, les dégâts de base de cette attaque sont de 100 au lieu de 30.",
				de: "Wenn dein Gegner nur noch einen Preis übrig hat, und Regirock * das einzige Pokémon ist, das du im Spiel hast, beträgt der Grundschaden dieses Angriffs 100 Schadenspunkte anstelle von 30 Schadenspunkten."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 3,

	thirdParty: {
		tcgplayer: 88673
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
