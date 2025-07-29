import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Exeggcute",
		fr: "Nœufnœuf",
		de: "Owei"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		102,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sleep Power",
				fr: "Poudre dodo",
				de: "Schlafpuder"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psyshock",
				fr: "Choc psy",
				de: "Psyschock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Sa coquille est très solide. Elle lui permet de survivre même si elle est fissurée."
	},

	thirdParty: {
		cardmarket: 274716
	}
}

export default card
