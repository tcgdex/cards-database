import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Lopunny",
		fr: "Lockpin",
		de: "Schlapor"
	},
	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		428,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Buneary",
		fr: "Laporeille",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ice Beam",
				fr: "Laser glace",
				de: "Eisstrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rear Kick",
				fr: "Ruade",
				de: "Rückwärtskick"
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
