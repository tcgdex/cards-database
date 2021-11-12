import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Haunter",
		fr: "Spectrum"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		93,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gastly",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hypnosis",
				fr: "Hypnose"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Dream Eater",
				fr: "Dévorêve"
			},
			effect: {
				en: "You can't this attack unless the Defending Pokémon is Asleep.",
				fr: "Vous ne pouvez utiliser cette attaque que si le Pokémon Défenseur est Endormi."
			},
			damage: 50,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Il peut se glisser à travers les murs comme une créature d'une autre dimension."
	}
}

export default card
