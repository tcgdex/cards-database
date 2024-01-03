import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Magcargo",
		fr: "Volcaropod",
		de: "Magcargo"
	},
	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		219,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Slugma",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'boule",
				de: "Headbutt"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Burning Ball",
				fr: "Boule brûlante",
				de: "Burning Ball"
			},
			effect: {
				en: "If Magcargo has at least 2 Fire Energy attached to it, the Defending Pokémon is now Burned.",
				fr: "Si Volcaropod possède au moins 2 Énergies , le Pokémon Défenseur est maintenant Brûlé.",
				de: "If Magcargo has at least 2  Energy attached to it, the Defending Pokémon is now Burned."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
