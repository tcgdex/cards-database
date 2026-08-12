import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Gurdurr",
		fr: "Ouvrifier",
		es: "Gurdurr",
		it: "Gurdurr",
		pt: "Gurdurr",
		de: "Strepoli"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		533,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Timburr",
		fr: "Charpenti",
		de: "Praktibalk"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bulk Up",
				fr: "Gonflette",
				de: "Protzer"
			},
			effect: {
				en: "During your next turn, each of this Pokémon's attacks does 20 more damage (before applying Weakness and Resistance).",
				fr: "Lors de votre prochain tour, chaque attaque de ce Pokémon inflige 20 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				de: "Während deines nächsten Zuges fügt jeder Angriff dieses Pokémon 20 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Pound",
				fr: "Écras'Face",
				de: "Pfund"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "They strengthen their bodies by carrying steel beams. They show off their big muscles to their friends.",
		de: "Zu Trainingszwecken trägt es immer einen Stahlträger bei sich. Unter Kollegen gibt es nur zu gern mit seinen Muskeln an."
	},

	thirdParty: {
		cardmarket: 279798,
		tcgplayer: 85980
	}
}

export default card
