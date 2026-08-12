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
		de: "Kaumalat"
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
				de: "Tackle"
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
				de: "Zerfetzer"
			},
			effect: {
				en: "This attack's damage isn't affected by any effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Défenseur.",
				de: "Der Schaden dieses Angriffs wird durch Effekte auf dem Verteidigenden Pokémon nicht verändert."
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

	description: {
		en: "It loves sparkly things. It seeks treasures in caves and hoards the loot in its nest.",
		de: "Es liebt funkelnde Dinge und sucht nach Schätzen in Höhlen, die es dann in seinem Nest hortet."
	},

	thirdParty: {
		cardmarket: 280527,
		tcgplayer: 85600
	}
}

export default card
