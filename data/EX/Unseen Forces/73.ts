import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Slugma",
		fr: "Limagma",
		de: "Schneckmag"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		218,
	],

	hp: 40,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Yawn",
				fr: "Baillement",
				de: "Yawn"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "The Defending Pokémon is now Asleep."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'boule",
				de: "Headbutt"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276719,
		tcgplayer: 89344
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
