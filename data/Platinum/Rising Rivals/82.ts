import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Spheal",
		fr: "Obalie Niv. 18",
		de: "Seemops"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		363,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],

			name: {
				en: "Powder Snow",
				fr: "Poudreuse",
				de: "Pulverschnee"
			},

			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},

			damage: 10
		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Ice Ball",
				fr: "Ball'glace",
				de: "Frostbeule"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+10"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278656
	}
}

export default card
