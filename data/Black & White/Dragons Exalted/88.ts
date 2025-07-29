import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Gabite",
		fr: "Carmache",
		es: "Gabite",
		it: "Gabite",
		pt: "Gabite",
		de: "Knarksel"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		444,
	],

	hp: 80,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Gible",
		fr: "Griknot",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Fighting",
			],
			name: {
				en: "Shred",
				fr: "Déchiquetage",
			},
			effect: {
				en: "This attack's damage isn't affected by any effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Défenseur.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280527
	}
}

export default card
