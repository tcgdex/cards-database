import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Seel",
		fr: "Otaria",
		de: "Jurob"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		86,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Slap",
				fr: "Coud'keu",
				de: "Schweifschlag"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Icy Wind",
				fr: "Vent glacé",
				de: "Eissturm"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
				de: "Wirf 1 Münze. Bei \"Kopf\" schläft das Verteidigende Pokémon jetzt."
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
		cardmarket: 278816
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
