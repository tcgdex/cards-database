import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Marowak",
		fr: "Ossatueur",
		de: "Knogga"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		105,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bonemerang",
				fr: "Osmerang",
				de: "Knochmerang"
			},
			effect: {
				en: "Flip 2 coins. This attack does 60 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 60 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "60x",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Bone Impact",
				fr: "Impact osseux",
				de: "Knocheneinschlag"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 20 damage plus 60 more damage. Discard that Stadium card.",
				fr: "Si une carte Stade est en jeu, cette attaque inflige 20 dégâts plus 60 dégâts supplémentaires. Défaussez cette carte Stade.",
				de: "Wenn sich eine Stadion-Karte im Spiel befindet, fügt dieser Angriff 20 Schadenspunkte plus 60 weitere Schadenspunkte zu. Lege die Stadion-Karte auf den jeweiligen Ablagestapel."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It has been seen pounding boulders with the bone it carries in order to tap out messages to others."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279574,
		tcgplayer: 87228
	}
}

export default card
