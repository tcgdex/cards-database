import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Mankey",
		fr: "Férosinge",
		de: "Menki"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		56,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Punch",
				fr: "Koud’poing",
				de: "Boxhieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Karate Chop",
				fr: "Poing-Karaté",
				de: "Karateschlag"
			},
			effect: {
				en: "Does 40 damage minus 10 damage for each damage counter on Mankey.",
				fr: "Inflige 40 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Férosinge.",
				de: "Dieser Angriff fügt 40 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf Menki zu."
			},
			damage: "40-",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It is extremely ill-tempered. Groups of them will attack any handy target for no reason."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279209,
		tcgplayer: 87176
	}
}

export default card
