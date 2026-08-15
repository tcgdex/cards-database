import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Swanna",
		fr: "Lakmécygne",
		es: "Swanna",
		it: "Swanna",
		pt: "Swanna",
		de: "Swaroness"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		581,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Ducklett",
		fr: "Couaneton",
		de: "Piccolente"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aerial Ace",
				fr: "Aéropique",
				de: "AeroAss"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Defog",
				fr: "Anti-Brume",
				de: "Auflockern"
			},
			effect: {
				en: "You may discard any Stadium card in play. If you do, this attack does 40 more damage.",
				fr: "Vous pouvez défausser une carte Stade en jeu. Dans ce cas, cette attaque inflige 40 dégâts supplémentaires.",
				de: "Du kannst eine beliebige Stadionkarte aus dem Spiel auf den Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Despite their elegant appearance, they can flap their wings strongly and fly for thousands of miles.",
		de: "Sie wirken zerbrechlich, aber ihre starken Schwingen tragen sie in einem Stück bis zu 1 000 Kilometer weit."
	},

	thirdParty: {
		cardmarket: 280630,
		tcgplayer: 89687
	}
}

export default card
