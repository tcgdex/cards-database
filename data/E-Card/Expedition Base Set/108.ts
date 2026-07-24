import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Slowpoke",
		fr: "Abo",
		de: "Rettan"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [79],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],

			name: {
				en: "Fishing Tail",
				fr: "Dard-venin",
				de: "Poison Sting"
			},

			effect: {
				en: "Search your discard pile for a Baby Pokémon, Basic Pokémon, Evolution card, or basic Energy card, show it to your opponent, and then put it into your hand.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Poisoned."
			},

			damage: 10
		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85101,
				cardmarket: 274983
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
