import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Tauros",
		fr: "Tauros",
		de: "Tauros"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		128,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smash Kick",
				fr: "Coud’pattes",
				de: "Schmetterkick"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crimson Bull",
				fr: "Taurouge",
				de: "Purpurbulle"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads. Tauros is now Confused.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face. Tauros est maintenant Confus.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "They fight each other by locking horns. The herd’s protector takes pride in its battle-scarred horns."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279197
	}
}

export default card
