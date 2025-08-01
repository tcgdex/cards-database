import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Rhyhorn",
		de: "Rihorn"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		111,
	],

	hp: 60,

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
				en: "Horn Attack",
				de: "Hornattacke"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Retaliate",
				de: "Vergeltung"
			},
			effect: {
				en: "This attack does 10 damage times the number of damage counters on Rhyhorn.",
				de: "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl an Schadensmarken auf Rihorn zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275349,
		tcgplayer: 88739
	}
}

export default card
