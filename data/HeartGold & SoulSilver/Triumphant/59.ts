import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Carvanha",
		fr: "Carvanha",
		de: "Kanivanha"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		318,
	],

	hp: 50,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Focus Energy",
				fr: "Puissance",
				de: "Energiefokus"
			},
			effect: {
				en: "During your next turn, Carvanha’s Bite attack’s base damage is 40.",
				fr: "Pendant votre prochain tour, l’attaque Morsure de Carvanha inflige 40 dégâts de base.",
				de: "In deinem nächsten Zug beträgt der Grundschaden von Kanivanhas Biss 40 Schadenspunkte."
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Biss"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "They form packs to attack boats and rip out their hulls to sink them. They live in rivers in the jungle."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279589,
		tcgplayer: 84116
	}
}

export default card
