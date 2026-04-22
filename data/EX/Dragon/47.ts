import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Vibrava",
		fr: "Vibraninf",
		de: "Vibrava"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		329,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Trapinch",
		fr: "Kraknoix"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Dive",
				fr: "Plongée",
				de: "Taucher"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Turn",
				fr: "Vif retournement",
				de: "Schnelldrehung"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez deux pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "40x",

		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 90334,
		cardmarket: 275899
	}
}

export default card
