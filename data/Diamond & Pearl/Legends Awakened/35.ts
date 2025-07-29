import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Poliwrath",
		fr: "Tartard",
		de: "Quappo"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		62,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Quaputzi",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Focus Punch",
				fr: "Mitra-poing",
				de: "Power-Punch"
			},
			effect: {
				en: "If Poliwrath was damaged by an attack during your opponent's last turn, this attack does nothing.",
				fr: "Si une attaque a infligé des dégâts à Tartard lors du dernier tour de votre adversaire, cette attaque est sans effet.",
				de: "Wenn Quappo im letzten Zug deines Gegners durch einen Angriff Schaden zugefügt wurde, hat dieser Angriff keine Auswirkungen."
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Submission",
				fr: "Sacrifice",
				de: "Überroller"
			},
			effect: {
				en: "Poliwrath does 20 damage to itself.",
				fr: "Tartard s'inflige 20 dégâts.",
				de: "Quappo fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],

	retreat: 2,

	description: {
		fr: "Il possède de sacrés biscoteaux. Il peut parcourir sans relâche l'Océan Pacifique."
	},

	thirdParty: {
		cardmarket: 278184
	}
}

export default card
