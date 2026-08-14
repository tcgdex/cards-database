import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Parasect",
		fr: "Parasect",
		it: "Parasect",
		de: "Parasek"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		47,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Paras",
		fr: "Paras",
		it: "Paras",
		de: "Paras"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Spore",
				fr: "Spore",
				it: "Spore",
				de: "Pilzspore"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				it: "Il Pokémon Difensore è Addormentato.",
				de: "Das verteidigende Pokémon ist jetzt schlafend."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				it: "Lacerazione",
				de: "Schlitzer"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places.",
		fr: "Une symbiose entre un parasite et un insecte. Le champignon a pris le contrôle sur son hôte.",
		it: "Un'accoppiata ospite-parassita dove il fungo parassita prevale sul bruco ospite. Predilige i posti umidi.",
		de: "Ein Wirt-Parasitenverhältnis, in dem der Parasitenpilz den Wirtskäfer übernommen hat. Zieht feuchte Orte vor."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273838,
				tcgplayer: 45144
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273838,
				tcgplayer: 45144
			}
		}
	],
}

export default card
