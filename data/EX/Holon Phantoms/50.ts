import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Primeape δ",
		fr: "Colossinge δ",
		de: "Rasaff"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		57,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Wreck",
				fr: "Anéantissement",
				de: "Zerschlagen"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 30 damage plus 30 more damage. Discard that Stadium card.",
				fr: "Si une carte Stade est en jeu, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires. Défaussez cette carte Stade.",
				de: "Wenn sich eine Stadion-Karte im Spiel befindet, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu. Lege danach die Stadion-Karte auf den Ablagestapel."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flames of Rage",
				fr: "Flammes de rage",
				de: "Wutflammen"
			},
			effect: {
				en: "Discard 2 Energy attached to Primeape. This attack does 10 damage plus 20 more damage for each damage counter on Primeape.",
				fr: "Défaussez 2 Énergies attachées à Colossinge. Cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires pour chaque marqueur de dégât sur Colossinge.",
				de: "Lege 2 Energien, die an Rasaff angelegt sind, auf deinen Ablagestapel. Dieser Angriff fügt 10 Schadenspunkte plus 20 weitere Schadenspunkte für jede Schadensmarke auf Rasaff zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 277020
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
