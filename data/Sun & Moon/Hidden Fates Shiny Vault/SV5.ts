import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Pheromosa",
		fr: "Cancrelove",
		de: "Schabelle"
	},
	illustrator: "Mizue",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		795,
	],
	hp: 110,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "High Jump Kick",
				fr: "Pied Voltige",
				de: "Turmkick"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "White Ray",
				fr: "Rayon Blanc",
				de: "Weißer Strahl"
			},
			effect: {
				en: "If you have only 1 Prize card remaining, this attack does 90 more damage.",
				fr: "S’il vous reste exactement 1 carte Récompense, cette attaque inflige 90 dégâts supplémentaires.",
				de: "Wenn du genau 1 verbleibende Preiskarte hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],






	description: {
		en: "One of the Ultra Beasts. It refuses to touch anything, perhaps because it senses some uncleanness in this world.",
		de: "Diese Ultrabestie scheint diese Welt für unrein zu halten und zieht es daher vor, mit nichts und niemandem in Berührung zu kommen."
	},
}

export default card
